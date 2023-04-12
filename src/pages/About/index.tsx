import { Col, Row } from "antd";

import AboutImage from "@/assets/about.webp";
import BaseLayout from "@/layouts/baseLayout";

import "./style.scss";

const About = () => {
  const aboutContent = [
    {
      title: "Produk Berkualitas",
      description:
        "Jika Anda menghabiskan waktu coding anda dengan baik pada lingkungan tertentu, Anda harus tahu persis bagaimana cara mengendalikannya.",
    },
    {
      title: "Garansi Pabrikan yang Diperpanjang",
      description:
        "Jika Anda menghabiskan waktu coding anda dengan baik pada lingkungan tertentu, Anda harus tahu persis bagaimana cara mengendalikannya.",
    },
    {
      title: "100% Jaminan Kepuasan Pelanggan",
      description:
        "Jika Anda menghabiskan waktu coding anda dengan baik pada lingkungan tertentu, Anda harus tahu persis bagaimana cara mengendalikannya.",
    },
  ];

  return (
    <BaseLayout>
      <div className="banner">Tentang Kami</div>
      <div className="pd-about">
        <div className="pd-about-title">Tentang Perusahaan</div>
        <div className="pd-about-container">
          <div className="pd-about-content">
            <Row>
              <Col xs={24} lg={11}>
                <img
                  src={AboutImage}
                  alt="about"
                  width="100%"
                  height={366}
                  style={{ height: "auto" }}
                />
              </Col>
              <Col xs={24} lg={{ span: 11, offset: 2 }}>
                <div className="pd-about-content-wrapper">
                  {aboutContent.map((about) => (
                    <div key={about.title}>
                      <div className="pd-about-content-title">{about.title}</div>
                      <div className="pd-about-content-description">{about.description}</div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
