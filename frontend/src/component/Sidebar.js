import { useState, useMemo, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaRocket,
  FaShieldAlt,
  FaLock,
  FaDochub,
  FaTelegramPlane,
  FaTwitter,
  FaHome,
} from "react-icons/fa";
import { SiAdobeaudition } from "react-icons/all";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import styled from "styled-components";
import queryString from "query-string";

const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #ffdb58;
    padding: 5px;
    border-radius: 10px;
  }
`;

export function useRouter() {
  const params = useParams();
  const location = useLocation();

  return useMemo(() => {
    return {
      push: location.push,
      replace: location.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      location,
    };
  }, [params, location]);
}

const MainLayout = (props) => {
  const router = useRouter();

  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 575;

  const [collapsed, setCollapsed] = useState(isMobile);
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const onClickMenuItem = () => {
    if (isMobile) setCollapsed(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader>
          <img
            src={require("../images/logo.png").default}
            alt="Brand Logo"
            width="50px"
          />
          <h3>SafePad</h3>
          <div className="toggleMenu" onClick={onClickMenuIcon}>
            <AiOutlineMenu />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <Menuitem
              icon={<FaHome />}
              className={`${router.pathname === "/" ? "active" : ""}`}
            >
              <Link to="/" onClick={onClickMenuItem}>
                Home
              </Link>
            </Menuitem>
            <SubMenu
              title="Launchpads"
              icon={<FaRocket />}
              className={`${
                router.pathname === "/presale" ||
                router.pathname === "/fairlaunch" ||
                router.pathname === "/sale-list" ||
                router.pathname === "/token" ||
                router.pathname === "/my-contribution"
                  ? "active"
                  : ""
              }`}
            >
              <Menuitem
                className={`${router.pathname === "/presale" ? "active" : ""}`}
              >
                <Link to="/presale" onClick={onClickMenuItem}>
                  Create launchpad
                </Link>
              </Menuitem>
              <MenuItem
                className={`${
                  router.pathname === "/fairlaunch" ? "active" : ""
                }`}
              >
                <Link to="/fairlaunch" onClick={onClickMenuItem}>
                  Create fair launch
                </Link>
              </MenuItem>
              <MenuItem
                className={`${router.pathname === "/token" ? "active" : ""}`}
              >
                <Link to="/token" onClick={onClickMenuItem}>
                  Create token
                </Link>
              </MenuItem>
              <MenuItem
                className={`${
                  router.pathname === "/sale-list" ||
                  router.pathname === "/my-contribution"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/sale-list" onClick={onClickMenuItem}>
                  Launchpad list
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="Private Sale"
              icon={<FaShieldAlt />}
              className={`${
                router.pathname === "/privatesale" ||
                router.pathname === "/prvsale-list" ||
                router.pathname === "/prv-contribution"
                  ? "active"
                  : ""
              }`}
            >
              <Menuitem
                className={`${
                  router.pathname === "/privatesale" ? "active" : ""
                }`}
              >
                <Link to="/privatesale" onClick={onClickMenuItem}>
                  Create Private Sale
                </Link>
              </Menuitem>
              <MenuItem
                className={`${
                  router.pathname === "/prvsale-list" ||
                  router.pathname === "/prv-contribution"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/prvsale-list" onClick={onClickMenuItem}>
                  Private Sale list
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="Safe Lock"
              icon={<FaLock />}
              className={`${
                router.pathname === "/lock" ||
                router.pathname === "/token-locked" ||
                router.pathname === "/liquidity-locked"
                  ? "active"
                  : ""
              }`}
            >
              <Menuitem
                className={`${router.pathname === "/lock" ? "active" : ""}`}
              >
                <Link to="/lock" onClick={onClickMenuItem}>
                  Create Lock
                </Link>
              </Menuitem>
              <MenuItem
                className={`${
                  router.pathname === "/token-locked" ? "active" : ""
                }`}
              >
                <Link to="/token-locked" onClick={onClickMenuItem}>
                  Token
                </Link>
              </MenuItem>
              <MenuItem
                className={`${
                  router.pathname === "/liquidity-locked" ? "active" : ""
                }`}
              >
                <Link to="/liquidity-locked" onClick={onClickMenuItem}>
                  Liquidity
                </Link>
              </MenuItem>
            </SubMenu>
            <Menuitem icon={<SiAdobeaudition />}>
              <a href="https://t.me/BuildServices" target="_blank">
                KYC & Audit
              </a>
            </Menuitem>
            <Menuitem icon={<FaDochub />}>
              <a
                href="https://winterdog.org/wp-content/uploads/2022/10/wp_winterdog1.pdf"
                target="_blank"
              >
                Docs
              </a>
            </Menuitem>
            <Menuitem icon={<FaTelegramPlane />}>
              <a href="https://t.me/Winterdog" target="_blank">
                Telegram
              </a>
            </Menuitem>
            <Menuitem icon={<FaTwitter />}>
              <a href="https://twitter.com/winterdogbnb" target="_blank">
                Twitter
              </a>
            </Menuitem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <a id="lang-change-en" class="lang-change" href="javascript:void(0);">
            <img
              src={require("../images/lg_eng.gif").default}
              alt="Brand Logo"
              width="30px"
            />
          </a>
          <a id="lang-change-cn" class="lang-change" href="javascript:void(0);">
            <img
              src={require("../images/lg_chi.gif").default}
              alt="Brand Logo"
              width="30px"
            />
          </a>
          <a id="lang-change-hi" class="lang-change" href="javascript:void(0);">
            <img
              src={require("../images/lg_hin.gif").default}
              alt="Brand Logo"
              width="30px"
            />
          </a>
          <a id="lang-change-in" class="lang-change" href="javascript:void(0);">
            <img
              src={require("../images/lg_ind.gif").default}
              alt="Brand Logo"
              width="30px"
            />
          </a>
        </SidebarFooter>
      </ProSidebar>
      {collapsed && (
        <div
          className="mobile-toggleMenu show-on-mobile"
          onClick={onClickMenuIcon}
        >
          <AiOutlineMenu />
        </div>
      )}
    </>
  );
};
export default MainLayout;
