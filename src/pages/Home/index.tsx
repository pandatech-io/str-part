import { Button, Col, ConfigProvider, Form, Input, Row } from "antd";

import MapImage from "@/assets/map.webp";
import MotorBodyLogo from "@/assets/motor.webp";
import MotorLogo from "@/assets/r25-4-med.webp";
import BaseLayout from "@/layouts/baseLayout";

import "./style.scss";

const Home = () => {
  const products = [
    {
      img: "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
      title: "Just Launched",
      description: "This is the feature that highlights your project from the competitors.",
    },
    {
      img: "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
      title: "Exciting News",
      description: "This is the feature that highlights your project from the competitors.",
    },
    {
      img: "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
      title: "Insider Stories",
      description: "This is the feature that highlights your project from the competitors.",
    },
    {
      img: "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
      title: "Fresh Content",
      description: "This is the feature that highlights your project from the competitors.",
    },
    {
      img: "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
      title: "Exclusive Freebies",
      description: "This is the feature that highlights your project from the competitors.",
    },
    {
      img: "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
      title: "Weekly Giveaways",
      description: "This is the feature that highlights your project from the competitors.",
    },
  ];
  const dummyData = [
    {
      title: "Showcase and embed your work with",
    },
    {
      title: "Publish across social channels in a click",
    },
    {
      title: "Sell your videos worldwide",
    },
  ];
  return (
    <BaseLayout>
      <div className="pd-home">
        <Row className="pd-home-container">
          <Col span={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={MotorLogo}
                alt="motor"
                width={450}
                height={280}
                style={{
                  width: 450,
                  height: 280,
                  objectFit: "contain",
                }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="pd-home-main-wrapper">
              <div className="pd-home-main-title">The Best Investment For Your Future</div>
              <div className="pd-home-main-subtitle">
                In efforts to expand our horizons, we welcome every investment-minded individual to
                join us in the Condotel Investment Opportunity.
              </div>
              <ConfigProvider
                theme={{
                  token: {
                    paddingContentHorizontal: 40,
                    paddingContentVertical: 14,
                  },
                }}
              >
                <div>
                  <Button type="primary" size="large" style={{ letterSpacing: 4 }}>
                    PRODUCTS
                  </Button>
                </div>
              </ConfigProvider>
            </div>
          </Col>
        </Row>
        <div className="pd-home-project">
          <div className="pd-home-project-title">Exclusive Features For The Next Project</div>
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="youtube"
          />
          <div className="pd-home-project-subtitle">
            All base UI elements are made using Nested Symbols and shared styles that are logically
            connected with one another.
          </div>
        </div>
        <div className="pd-home-products">
          <div className="pd-home-products-title">Explore Our Products</div>
          <Row
            gutter={[40, 40]}
            style={{
              width: 900,
            }}
          >
            {products.slice(0, 6).map((product) => (
              <Col span={8} key={product.title}>
                <div className="pd-home-products-card">
                  <img src={product.img} alt={product.title} width={100} height={70} />
                  <div className="pd-home-products-card-title">{product.title}</div>
                  <div className="pd-home-products-card-description">{product.description}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <Row className="pd-home-content">
          <Col span={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={MotorBodyLogo}
                alt="motor"
                width={450}
                height={280}
                style={{
                  width: 450,
                  height: 280,
                  objectFit: "contain",
                }}
              />
            </div>
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div className="pd-home-content-title">
              Long headline on two lines to turn your visitors into users and achieve more
            </div>
            <div className="pd-home-content-subtitle">
              Separated they live in Bookmarks right at the coast of the famous Semantics, large
              language ocean Separated they live in Bookmarks right at the coast
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {dummyData.map((data) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                  key={data.title}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: "1px solid #F5A623",
                      borderRadius: "100%",
                    }}
                  />
                  <div>{data.title}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <div className="pd-home-product-inquiry">
          <div className="pd-home-product-inquiry-title">Product Inquiry</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Row
              style={{
                width: 900,
              }}
            >
              <Col span={11}>
                <div className="pd-home-product-inquiry-form">
                  <Form name="basic" autoComplete="off" layout="vertical">
                    <Form.Item label="Email" name="email">
                      <Input size="large" className="pd-home-product-inquiry-form-input" />
                    </Form.Item>
                    <Row>
                      <Col span={11}>
                        <Form.Item label="Your Name" name="name">
                          <Input size="large" className="pd-home-product-inquiry-form-input" />
                        </Form.Item>
                      </Col>
                      <Col span={11} offset={2}>
                        <Form.Item label="Phone Number" name="phone">
                          <Input size="large" className="pd-home-product-inquiry-form-input" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Your Message" name="message">
                      <Input size="large" className="pd-home-product-inquiry-form-input" />
                    </Form.Item>
                    <ConfigProvider
                      theme={{
                        token: {
                          paddingContentHorizontal: 25,
                          paddingContentVertical: 14,
                        },
                      }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        style={{ letterSpacing: 4, fontSize: 14, marginTop: 32 }}
                      >
                        SEND
                      </Button>
                    </ConfigProvider>
                  </Form>
                </div>
              </Col>
              <Col span={11} offset={2} className="pd-home-product-inquiry-map">
                <img src={MapImage} alt="map" width={450} height={300} />
                <Row>
                  <Col span={24}>
                    <div className="pd-home-product-inquiry-map-title">Where to find Us</div>
                  </Col>
                  <Col span={11} className="pd-home-product-inquiry-map-description">
                    San Francisco, 28 Eva Mountain Suite 942.
                  </Col>
                  <Col span={11} offset={2} className="pd-home-product-inquiry-map-description">
                    alexei@getcraftwork.com +8 (477) 539-404-6542
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
