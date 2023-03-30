import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Slider from "react-slick";

import AboutImage from "@/assets/about.webp";
import BannerLogo from "@/assets/banner.webp";
import GrayLogo from "@/assets/gray.png";
import HeroLogo from "@/assets/hero.png";
import PortlandLogo from "@/assets/portland.png";
import RaptureLogo from "@/assets/rapture.png";
import SingletonLogo from "@/assets/singleton.png";
import BaseLayout from "@/layouts/baseLayout";

import "./style.scss";

const CustomArrowNext = ({ onClick }: any) => (
  <div
    role="presentation"
    onClick={onClick}
    onKeyDown={onClick}
    style={{
      borderRadius: "100%",
      border: "2px solid #BBBBBB",
      width: 40,
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: -25,
      top: "50%",
      transform: "translate(0,-50%)",
      WebkitTransform: "translate(0,-50%)",
    }}
  >
    <RightOutlined />
  </div>
);

const CustomArrowPrev = ({ onClick }: any) => (
  <div
    role="presentation"
    onClick={onClick}
    onKeyDown={onClick}
    style={{
      borderRadius: "100%",
      border: "2px solid #BBBBBB",
      width: 40,
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: -25,
      top: "50%",
      transform: "translate(0,-50%)",
      WebkitTransform: "translate(0,-50%)",
    }}
  >
    <LeftOutlined />
  </div>
);

const About = () => {
  const aboutContent = [
    {
      title: "Quality Products",
      description:
        "If you spend a good percentage of your time coding in a specific environment, you should know exactly how to control it.",
    },
    {
      title: "Extended Manufacturer’s Warranty",
      description:
        "If you spend a good percentage of your time coding in a specific environment, you should know exactly how to control it.",
    },
    {
      title: "100% Customer Satisfaction Guarantee",
      description:
        "Unstoppable programmers spend their time doing deep work, and the number of hours spent working don’t matter.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomArrowNext />,
    prevArrow: <CustomArrowPrev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 444,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliders = [
    {
      img: SingletonLogo,
      name: "singleton",
    },
    {
      img: HeroLogo,
      name: "hero",
    },
    {
      img: RaptureLogo,
      name: "rapture",
    },
    {
      img: GrayLogo,
      name: "gray",
    },
    {
      img: PortlandLogo,
      name: "portland",
    },
  ];

  return (
    <BaseLayout>
      <img src={BannerLogo} alt="banner" width="100%" height={400} />
      <div className="pd-about">
        <div className="pd-about-title">About Us</div>
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
        <div className="pd-about-slider-wrapper">
          <div
            style={{
              maxWidth: 1024,
              width: "100%",
              padding: "0px 16px",
            }}
          >
            <Slider {...settings}>
              {sliders.map((slider) => (
                <div key={slider.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={slider.img} alt={slider.name} width={115} height={35} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: 56,
              maxWidth: 900,
              paddingTop: 48,
              borderTop: "1px solid #BBBBBB",
              textAlign: "center",
              fontWeight: 400,
              fontSize: 18,
              color: "#1C1B24",
              opacity: 0.5,
            }}
          >
            These are the basics of what to look for in your new telescope. Finally, make sure the
            telescope can be enhanced and expanded without having to throw the first unit away and
            buy something completely new. You want your telescope to grow as your knowledge and
            skills grow.
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
