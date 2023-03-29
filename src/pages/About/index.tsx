import { Col, Row } from "antd";

import BannerLogo from "@/assets/banner.webp";
import BaseLayout from "@/layouts/baseLayout";

import "./style.scss";

const About = () => {
  return (
    <BaseLayout>
      <img src={BannerLogo} alt="banner" width="100%" height={550} />
      <div className="pd-about">
        <div className="pd-about-title">About Us</div>
        <div className="pd-about-container">
          <div className="pd-about-content">
            <Row>
              <Col span={11}>kiri</Col>
              <Col span={11} offset={2}>
                kanan
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
