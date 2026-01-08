import React from "react";
import clsx from "clsx";
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import Link from '@docusaurus/Link';
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
import styles from "./styles.module.css";

export const RenderEcosystemDropdown = ({ config }) => (
  <Menu.Root positioning={{ placement: "bottom-center" }}>
    <Menu.Trigger asChild>
      <IconButton className="action-btn grid " size={24} variant="ghost">
        <Grip />
      </IconButton>
    </Menu.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content className="drop-down-menu-eco">
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel className="menu-label-eco">
              Ecosystem
            </Menu.ItemGroupLabel>

            {config?.map((item) => (
              <Menu.Item key={item.id} asChild borderRadius={"12px"}>
                <a
                  href={item.hyperlink}
                  target="_blank"
                  className="dropdown-menu-item-eco"
                >
                  <HStack gap={"20px"} alignItems={"flex-start"}>
                    <Box className="menu-img-icon-wrapper">
                      <Image
                        src={item.icon}
                        h={"100%"}
                        w={"100%"}
                        fit={"contain"}
                      />
                    </Box>

                    <VStack alignItems={"flex-start"} gap={0}>
                      <h4 className="menu-item-title">{item.title}</h4>
                      <p className=" menu-item-desc">{item.description}</p>
                    </VStack>
                  </HStack>
                </a>
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
);


function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}
function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          "navbar__items"
        )}
      >
        {left}
      </div>
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerRight,
          "navbar__items navbar__items--right"
        )}
      >
        {right}
      </div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === "search");
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          <div className="navbar-left-wrapper">
            <NavbarItems items={leftItems} />
          </div>
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
         <NavbarItems items={rightItems} />
         <NavbarColorModeToggle className={styles.colorModeToggle} />
         <Link to="https://www.wavemaker.com/get-demo/" className="button button--primary">Schedule Demo</Link>
        </>
      }
    />
  );
}
