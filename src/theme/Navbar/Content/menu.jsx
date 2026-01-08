import React, { useState, useRef, useEffect } from "react";
import { GripIcon } from "lucide-react";

const MenuSection = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const handleToggle = () => setOpen((prev) => !prev);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menu = [
    {
      label: "React",
      icon: "/img/icon/react-sicon.svg",
      link: "https://react-components.onwavemaker.com/",
    },
    {
      label: "React Native",
      icon: "/img/icon/reactnative-sicon.svg",
      link: "https://rn-components.onwavemaker.com/",
    },
    {
      label: "Docs",
      icon: "/img/icon/docs-icon.svg",
      link: " https://next-docs.wavemaker.com/",
      subMenu: [],
    },
    {
      label: "Marketplace",
      icon: "/img/icon/marketplace-icon.svg",
      link: "https://next-marketplace.onwavemaker.com/",
      subMenu: [],
    },
    {
      label: "Schedule Demo",
      icon: "/img/wm-logo.svg",
      link: "https://www.wavemaker.com/get-demo/",
      subMenu: [],
    },
  ];

  const goToMenu = (link) => {
    if (link && link !== "") {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="menu-wrapper">
      <button
        ref={buttonRef}
        onClick={handleToggle}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="profile-menu"
        className="btn btn-icon"
      >
       <GripIcon size={28} />
      </button>
      {open && (
        <div
          ref={menuRef}
          id="profile-menu"
          role="menu"
          aria-labelledby="profile-button"
          className="dropdown-popover animate-fade-in"
        >
          <div className="popover-content">
            <div className="content-grid">
              {menu.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap- menu-item"
                  onClick={() => goToMenu(item.link)}
                >
                  <div className="menu-icon">
                    <img width={32} height={32} src={item.icon} />
                  </div>
                  <span className="menu-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default MenuSection;
