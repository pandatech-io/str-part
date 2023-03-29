import { CloseOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import { MobileMenuProps } from "./interfaces";

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
          <Link to={"/"} onClick={handleClose}>
            <div className="menu">Home</div>
          </Link>
          <Link to={"/products"} onClick={handleClose}>
            <div className="menu">Products</div>
          </Link>
          <Link to={"/about-us"} onClick={handleClose}>
            <div className="menu">About Us</div>
          </Link>
          <Link to={"/contact-us"} onClick={handleClose}>
            <div className="menu">Contact</div>
          </Link>
        </div>
      </Row>
    </div>
  );
};

export default MobileMenu;
