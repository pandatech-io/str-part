import { Button, Col, ConfigProvider, Form, Input, Row } from "antd";

import MapImage from "@/assets/map.webp";
import BaseLayout from "@/layouts/baseLayout";

import "./style.scss";

const Contact = () => {
  return (
    <BaseLayout>
      <div className="pd-contact">
        <div className="pd-contact-product-inquiry">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="pd-contact-product-inquiry-title">Contact Us!</div>
          </div>
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
                <div className="pd-contact-product-inquiry-form">
                  <Form name="basic" autoComplete="off" layout="vertical">
                    <Form.Item label="Email" name="email">
                      <Input size="large" className="pd-contact-product-inquiry-form-input" />
                    </Form.Item>
                    <Row>
                      <Col span={11}>
                        <Form.Item label="Your Name" name="name">
                          <Input size="large" className="pd-contact-product-inquiry-form-input" />
                        </Form.Item>
                      </Col>
                      <Col span={11} offset={2}>
                        <Form.Item label="Phone Number" name="phone">
                          <Input size="large" className="pd-contact-product-inquiry-form-input" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Your Message" name="message">
                      <Input size="large" className="pd-contact-product-inquiry-form-input" />
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
              <Col span={11} offset={2} className="pd-contact-product-inquiry-map">
                <img src={MapImage} alt="map" width={450} height={300} />
                <Row>
                  <Col span={24}>
                    <div className="pd-contact-product-inquiry-map-title">Where to find Us</div>
                  </Col>
                  <Col span={11} className="pd-contact-product-inquiry-map-description">
                    San Francisco, 28 Eva Mountain Suite 942.
                  </Col>
                  <Col span={11} offset={2} className="pd-contact-product-inquiry-map-description">
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

export default Contact;
