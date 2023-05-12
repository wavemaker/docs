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
function NavbarContentLayout({ left, center, right }) {
  const items = useNavbarItems();
  const searchBarItem = items.find((item) => item.type === 'search');
  const rightItems = items.filter((item) => item.position === 'right' && ((item["className"] && !item["className"].includes('button')) || item["className"] === undefined))
  const rightEndItems = items.filter((item) => item.position === 'right' && item["className"] && item["className"].includes('button'))
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--center">{center}
        <BrowserOnly>
          {() => !searchBarItem && (document.URL.split('/').slice(-1)[0] != "" || document.URL.split('/').slice(-2)[0] != "learn") && !document.URL.split('/').slice(-1)[0].includes("search") && (
            <div id="header-search">
              <SearchBar elementId="header-search" autoFocus={false} />
            </div>
          )}
        </BrowserOnly>
      </div>
      <div className="navbar__items navbar__items--right">
        <NavbarItems items={rightItems} />
        <NavbarColorModeToggle className={styles.colorModeToggle} />
        <NavbarItems items={rightEndItems} />
      </div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
        </>
      }
    />
  );
}
