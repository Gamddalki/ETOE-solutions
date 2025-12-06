import React, { useState, useRef, useEffect, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 200px;
  background: ${(props) =>
    props.transparent ? "rgba(255, 255, 255, 0.1)" : props.theme.colors.header};
  backdrop-filter: ${(props) =>
    props.transparent ? "saturate(180%) blur(8px)" : "none"};
  color: ${(props) =>
    props.transparent ? "#ffffff" : props.theme.colors.headerText};
  z-index: 25;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid
    ${(props) =>
      props.transparent ? "rgba(255,255,255,0.35)" : props.theme.colors.hover};
  &:hover {
    background: ${(props) => props.theme.colors.header};
    backdrop-filter: none;
    color: ${(props) => props.theme.colors.headerText};
    border-bottom: 1px solid ${(props) => props.theme.colors.hover};
    img {
      filter: none;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 20px 50px;
    z-index: 15;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20px 20px;
  }
`;

const Logo = styled.img`
  height: 32px;
  filter: ${(props) =>
    props.transparent ? "brightness(0) invert(1)" : "none"};
`;

const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  color: inherit;
`;

const MenuItem = styled.div`
  position: relative;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

const MenuButton = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.colors.hover : "transparent"};
  color: ${(props) =>
    props.transparent
      ? "#ffffff"
      : props.active
      ? props.theme.colors.secondary
      : "inherit"};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: ${(props) => props.theme.colors.header};
  border-radius: 12px;
  padding: 16px;
  min-width: 160px;
  z-index: 20;
`;

const SubMenuItem = styled(Link)`
  display: block;
  padding: 10px 0;
  color: ${(props) => props.theme.colors.headerSubText};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.overlay};
  z-index: 15;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    z-index: 25;
  }
`;

const Hamburger = styled.div`
  flex: 0 0 auto;
  display: none;
  cursor: pointer;
  z-index: 100;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.header};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 30;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const MobileClose = styled.div`
  align-self: flex-end;
  font-size: 24px;
  cursor: pointer;
`;

const MobileMenuItem = styled.div`
  margin-top: 20px;
`;

const MobileMenuButton = styled.div`
  font-weight: 500;
  cursor: pointer;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileSubMenu = styled.div`
  margin-top: 8px;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.colors.hover};
  border-radius: 8px;
`;

const MobileSubMenuItem = styled(Link)`
  display: block;
  padding: 10px 0;
  color: ${(props) => props.theme.colors.headerSubText};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const isExternalLink = (url) => url.startsWith("http");

const menuItems = [
  {
    label: "이투이",
    subItems: [
      { label: "소개", to: "/etoe" },
      { label: "비전", to: "/etoe/vision" },
    ],
  },
  {
    label: "클라우드",
    subItems: [
      { label: "Oracle Database", to: "/cloud/database" },
      { label: "Oracle Cloud", to: "/cloud" },
      { label: "Cloud Service", to: "/cloud/service" },
    ],
  },
  {
    label: "솔루션",
    subItems: [
      { label: "기술지원", to: "/solutions" },
      { label: "컨설팅", to: "/solutions/consulting" },
    ],
  },
  {
    label: "컨택트",
    to: "/contact",
  },
  {
    label: "채용",
    subItems: [
      { label: "인재상", to: "/recruit" },
      {
        label: "채용안내",
        to: "https://www.jobkorea.co.kr/Recruit/Co_Read/Recruit/C/etoeadm",
      },
    ],
  },
];

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileOpen(false);
    setExpandedMenus({});
    // Toggle header transparency based on route and scroll position
    const isHome = location.pathname === "/";
    const updateTransparency = () => {
      if (!isHome) {
        setIsHeaderTransparent(false);
        return;
      }
      const atTop = window.scrollY < 40;
      setIsHeaderTransparent(atTop);
    };

    updateTransparency();

    if (isHome) {
      window.addEventListener("scroll", updateTransparency, { passive: true });
      return () => window.removeEventListener("scroll", updateTransparency);
    }
    return undefined;
  }, [location]);

  const handleMenuClick = useCallback((label, hasSubMenu) => {
    if (!hasSubMenu) {
      setActiveMenu(null);
      return;
    }
    setActiveMenu((prev) => (prev === label ? null : label));
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const isOverlayVisible = activeMenu !== null || isMobileOpen;

  const toggleMobileSubMenu = useCallback((label) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }, []);

  const renderDesktopMenu = (menu) => {
    const hasSubMenu = Array.isArray(menu.subItems);

    if (!hasSubMenu) {
      return (
        <MenuItem key={menu.label}>
          <Link to={menu.to}>
            <MenuButton>{menu.label}</MenuButton>
          </Link>
        </MenuItem>
      );
    }

    return (
      <MenuItem key={menu.label}>
        <MenuButton
          onClick={() => handleMenuClick(menu.label, true)}
          active={activeMenu === menu.label}
        >
          {menu.label}
        </MenuButton>

        {activeMenu === menu.label && (
          <SubMenu>
            {menu.subItems.map((item) => {
              const external = isExternalLink(item.to);
              return (
                <SubMenuItem
                  key={item.label}
                  to={item.to}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </SubMenuItem>
              );
            })}
          </SubMenu>
        )}
      </MenuItem>
    );
  };

  const renderMobileMenu = (menu) => {
    const hasSubMenu = Array.isArray(menu.subItems);

    if (!hasSubMenu) {
      return (
        <MobileMenuItem key={menu.label}>
          <MobileMenuButton as={Link} to={menu.to}>
            {menu.label}
          </MobileMenuButton>
        </MobileMenuItem>
      );
    }

    return (
      <MobileMenuItem key={menu.label}>
        <MobileMenuButton onClick={() => toggleMobileSubMenu(menu.label)}>
          {menu.label}
          {expandedMenus[menu.label] ? (
            <FiChevronUp size={18} />
          ) : (
            <FiChevronDown size={18} />
          )}
        </MobileMenuButton>
        {expandedMenus[menu.label] && (
          <MobileSubMenu>
            {menu.subItems.map((item) => {
              const external = isExternalLink(item.to);
              return (
                <MobileSubMenuItem
                  key={item.label}
                  to={item.to}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </MobileSubMenuItem>
              );
            })}
          </MobileSubMenu>
        )}
      </MobileMenuItem>
    );
  };

  const handleResize = useCallback(() => {
    const DESKTOP_WIDTH = 1024;
    const isMobile = window.innerWidth <= DESKTOP_WIDTH;

    if (isMobile) {
      setActiveMenu(null);
    }

    if (!isMobile) {
      setIsMobileOpen(false);
      setExpandedMenus({});
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleOverlayClick = useCallback(() => {
    setActiveMenu(null);
    setIsMobileOpen(false);
  }, []);

  const handleHamburgerClick = useCallback(() => {
    setIsMobileOpen(true);
    setExpandedMenus({});
  }, []);

  const handleMobileClose = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      {isOverlayVisible && <Overlay onClick={handleOverlayClick} />}

      <HeaderContainer transparent={isHeaderTransparent}>
        <Link to="/">
          <Logo
            src="/img/logo.png"
            alt="Logo"
            transparent={isHeaderTransparent}
          />
        </Link>

        <NavWrapper ref={navRef}>
          <Nav>{menuItems.map((menu) => renderDesktopMenu(menu))}</Nav>
        </NavWrapper>

        <Hamburger onClick={handleHamburgerClick}>
          <FiMenu size={24} />
        </Hamburger>
      </HeaderContainer>

      {isMobileOpen && (
        <MobileMenu>
          <MobileClose onClick={handleMobileClose}>
            <FiX />
          </MobileClose>

          {menuItems.map((menu) => renderMobileMenu(menu))}
        </MobileMenu>
      )}
    </>
  );
}

export default Header;
