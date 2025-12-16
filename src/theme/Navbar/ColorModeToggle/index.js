import React from 'react';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import styles from './styles.module.css';
export default function NavbarColorModeToggle({className}) {
  const navbarStyle = useThemeConfig().navbar.style;
  const {disableSwitch, respectPrefersColorScheme} = useThemeConfig().colorMode;
  const {colorModeChoice, setColorMode} = useColorMode();
  if (disableSwitch) {
    return null;
  }
  return (
    <ColorModeToggle
      className={className}
      buttonClassName={
        navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined
      }
      respectPrefersColorScheme={respectPrefersColorScheme}
      value={colorModeChoice}
      onChange={setColorMode}
    />
  );
}
