import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  const navigations = [
    {
      to: "/",
      name: "Beranda",
    },
    {
      to: "/products",
      name: "Produk",
    },
    {
      to: "/about-us",
      name: "Tentang",
    },
    {
      to: "/contact-us",
      name: "Hubungi Kami",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="pd-footer">
      <Row>
        <Col
          xs={{
            span: 12,
          }}
          md={{
            span: 4,
            offset: 16,
          }}
        >
          <div className="pd-footer-title">PRODUK</div>
        </Col>
        <Col
          xs={{
            span: 12,
          }}
          md={{
            span: 4,
          }}
        >
          <div className="pd-footer-title">INFO</div>
          <div className="pd-footer-menu">
            {navigations.map((navigation) => (
              <div
                className="pd-footer-menu-title"
                key={navigation.name}
                onClick={() => navigate(navigation.to)}
                role="presentation"
              >
                {navigation.name}
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <div className="pd-footer-divider" />
      <Row>
        <Col
          xs={{
            span: 24,
          }}
          md={{
            span: 12,
          }}
          className="pd-footer-copyright"
        >
          copyright©2022 str indonesia. all rights reserved
        </Col>
        <Col span={8} />
        <Col
          xs={{
            span: 24,
          }}
          md={{
            span: 4,
          }}
          className="pd-footer-develop"
        >
          Developed by{" "}
          <a href="https://pandatech.io/" target="_blank" rel="noreferrer">
            Pandatech.io
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
