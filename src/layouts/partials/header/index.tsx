import { MenuFoldOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";

import { navigations } from "./constans";
import useActions from "./useActions";
import MobileMenu from "../mobile-menu";
import StrLogo from "@/assets/strlogo.png";

import "./styles.scss";

const Header = () => {
  const { transformActive, mobileMenuVisible, handleMobileMenu } = useActions();

  return (
    <>
      {mobileMenuVisible && <MobileMenu handleClose={() => handleMobileMenu(false)} />}
      <header>
        <nav className={`pd-header ${transformActive ? "" : "pd-header--transform"}`}>
          <Row align="middle" gutter={16}>
            <Col xs={4} lg={{ offset: 1, span: 3 }}>
              <NavLink to="/">
                <div className="pd-header-logo">
                  <img
                    src={StrLogo}
                    alt="STR Indonesia"
                    width={76}
                    height={30}
                    style={{
                      width: 76,
                      height: 30,
                      objectFit: "contain",
                    }}
                  />
                </div>
              </NavLink>
            </Col>
            <Col xs={18} lg={10}>
              &nbsp;
            </Col>
            <Col xs={1} lg={0}>
              <MenuFoldOutlined onClick={() => handleMobileMenu(true)} />
            </Col>
            <Col xs={0} lg={{ span: 8, offset: 1 }}>
              <div className="pd-header-right">
                <ul className="menu font-ropasans">
                  {navigations.map((navigate) => (
                    <NavLink className="nav-link" to={navigate.to} key={navigate.name}>
                      <li>{navigate.name}</li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </nav>
        <div className="leverage">&nbsp;</div>
      </header>
    </>
  );
};

export default Header;
