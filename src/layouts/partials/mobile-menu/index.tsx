import { CloseOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import { MobileMenuProps } from "./interfaces";
import { navigations } from "@/constans/home";

import "./styles.scss";

const MobileMenu = ({ handleClose }: MobileMenuProps) => {
  return (
    <div className="pd-mobile-menu font-ropasans">
      <Row className="header">
        <Col
          className="side-btn pd-align-right"
          xs={{ span: 2, offset: 1 }}
          sm={{ span: 2, offset: 1 }}
          onClick={handleClose}
        >
          <CloseOutlined />
        </Col>
        <Col xs={24} sm={24} className="title">
          Menu
        </Col>
      </Row>
      <Row>
        <div className="mobile-menu">
          {navigations.map((navigation) => (
            <Link key={navigation.name} to={navigation.to} onClick={handleClose}>
              <div className="menu">{navigation.name}</div>
            </Link>
          ))}
        </div>
      </Row>
    </div>
  );
};

export default MobileMenu;
