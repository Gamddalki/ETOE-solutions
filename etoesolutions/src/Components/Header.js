import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 200px;
  background: ${(props) => props.theme.colors.header};
  z-index: 25;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  border-bottom: 1px solid ${(props) => props.theme.colors.hover};
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 20px 50px;
    z-index: 15;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 20px 20px;
  }
`;

const Logo = styled.img`
  height: 32px;
`;

const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
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
    props.active ? props.theme.colors.secondary : "inherit"};
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    z-index: 25;
  }
`;

const Hamburger = styled.div`
  flex: 0 0 auto;
  display: none;
  cursor: pointer;
  z-index: 100;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
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
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileOpen(false);
    setExpandedMenus({});
  }, [location]);

  const handleMenuClick = (label, hasSubMenu) => {
    if (!hasSubMenu) {
      setActiveMenu(null);
      return;
    }
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isOverlayVisible = activeMenu !== null || isMobileOpen;

  const toggleMobileSubMenu = (label) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    const DESKTOP_WIDTH = 1024;
    const handleResize = () => {
      const isMobile = window.innerWidth <= DESKTOP_WIDTH;

      if (isMobile) {
        setActiveMenu(null);
      }

      if (!isMobile) {
        setIsMobileOpen(false);
        setExpandedMenus({});
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isOverlayVisible && (
        <Overlay
          onClick={() => {
            setActiveMenu(null);
            setIsMobileOpen(false);
          }}
        />
      )}

      <HeaderContainer>
        <Link to="/">
          <Logo src="/img/logo.png" alt="Logo" />
        </Link>

        <NavWrapper ref={navRef}>
          <Nav>
            {menuItems.map((menu) => {
              const hasSubMenu = Array.isArray(menu.subItems);

              return (
                <MenuItem key={menu.label}>
                  {hasSubMenu ? (
                    <MenuButton
                      onClick={() => handleMenuClick(menu.label, true)}
                      active={activeMenu === menu.label}
                    >
                      {menu.label}
                      {hasSubMenu &&
                        window.innerWidth <=
                          `${(props) => props.theme.breakpoints.desktop}` && (
                          <FiChevronDown size={14} />
                        )}
                    </MenuButton>
                  ) : (
                    <Link to={menu.to}>
                      <MenuButton>{menu.label}</MenuButton>
                    </Link>
                  )}

                  {activeMenu === menu.label && hasSubMenu && (
                    <SubMenu>
                      {menu.subItems.map((item) => (
                        <SubMenuItem
                          key={item.label}
                          to={item.to}
                          target={
                            item.to.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.to.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.label}
                        </SubMenuItem>
                      ))}
                    </SubMenu>
                  )}
                </MenuItem>
              );
            })}
          </Nav>
        </NavWrapper>

        <Hamburger
          onClick={() => {
            setIsMobileOpen(true);
            setExpandedMenus({});
          }}
        >
          <FiMenu size={24} />
        </Hamburger>
      </HeaderContainer>

      {isMobileOpen && (
        <MobileMenu>
          <MobileClose onClick={() => setIsMobileOpen(false)}>
            <FiX />
          </MobileClose>

          {menuItems.map((menu) => {
            const hasSubMenu = Array.isArray(menu.subItems);
            return (
              <MobileMenuItem key={menu.label}>
                {hasSubMenu ? (
                  <>
                    <MobileMenuButton
                      onClick={() => toggleMobileSubMenu(menu.label)}
                    >
                      {menu.label}
                      {expandedMenus[menu.label] ? (
                        <FiChevronUp size={18} />
                      ) : (
                        <FiChevronDown size={18} />
                      )}
                    </MobileMenuButton>
                    {expandedMenus[menu.label] && (
                      <MobileSubMenu>
                        {menu.subItems.map((item) => (
                          <MobileSubMenuItem
                            key={item.label}
                            to={item.to}
                            target={
                              item.to.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              item.to.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {item.label}
                          </MobileSubMenuItem>
                        ))}
                      </MobileSubMenu>
                    )}
                  </>
                ) : (
                  <MobileMenuButton as={Link} to={menu.to}>
                    {menu.label}
                  </MobileMenuButton>
                )}
              </MobileMenuItem>
            );
          })}
        </MobileMenu>
      )}
    </>
  );
}

export default Header;
