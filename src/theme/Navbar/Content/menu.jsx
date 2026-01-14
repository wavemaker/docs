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
      label: "Academy",
      icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/icon/academy-icon.svg",
      link: " https://next-academy.wavemaker.com/",
      subMenu: [],
    },
    {
      label: "Marketplace",
      icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/icon/marketplace-icon.svg",
      link: "https://marketplace.onwavemaker.com/",
      subMenu: [],
    },
    {
      label: "Web",
      icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/icon/react-sicon.svg",
      link: "https://react-components.wavemaker.com/",
    },
    {
      label: "Mobile",
      icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/icon/reactnative-sicon.svg",
      link: "https://rn-components.wavemaker.com/",
    },
    {
      label: "Platform",
      icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/icon/wm-logo.svg",
      link: "https://www.wavemakeronline.com/",
      subMenu: [],
    },
    {
      label: "UI Kit",
      icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/icon/ds-icon.svg",
      link: "https://www.figma.com/community/file/1463103184874870889/wavemaker-ui-kit",
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
