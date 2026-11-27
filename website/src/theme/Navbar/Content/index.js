import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import styles from './styles.module.css';
import SearchBar from '../../SearchBar';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DocsSwitcher from '../DocsSwitcher';
import { useDocsSite } from '../DocsSwitcher/site';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}
// Same structure as the new docs navbar, so both sites place things in the same spots:
// logo | docs switcher | search ............ links [color mode] [demo] [menu]
function NavbarContentLayout({ left }) {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const searchBarItem = items.find((item) => item.type === 'search');
  // The search field names the docs version it searches, e.g. "Search v11.16 docs"
  const { current } = useDocsSite();
  const searchLabel = `Search ${current.label} docs`;
  const isButton = (item) => item.className && item.className.includes('button');
  const linkItems = items.filter((item) => item.position === 'right' && !isButton(item));
  const rightEndItems = items.filter((item) => item.position === 'right' && isButton(item));
  return (
    <div className="navbar__inner">
      <div className="navbar__items">
        {left}
        <BrowserOnly>
          {() => !searchBarItem && (document.URL.split('/').slice(-1)[0] != "" || document.URL.split('/').slice(-2)[0] != "learn") && !document.URL.split('/').slice(-1)[0].includes("search") && (
            <div id="header-search">
              <SearchBar elementId="header-search" autoFocus={false} placeholder={searchLabel} />
            </div>
          )}
        </BrowserOnly>
      </div>
      <div className="navbar__items navbar__items--right">
        <NavbarItems items={linkItems} />
        <NavbarColorModeToggle className={styles.colorModeToggle} />
        <NavbarItems items={rightEndItems} />
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
      </div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems] = splitNavbarItems(items);
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          <NavbarLogo />
          <DocsSwitcher />
          <NavbarItems items={leftItems} />
        </>
      }
    />
  );
}
