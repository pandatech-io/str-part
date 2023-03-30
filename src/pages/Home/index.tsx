import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Col, ConfigProvider, Form, Input, Row } from "antd";

import MapImage from "@/assets/map.webp";
import MotorBodyLogo from "@/assets/motor.webp";
import MotorLogo from "@/assets/r25-4-med.webp";
import BaseLayout from "@/layouts/baseLayout";
import { IContact } from "@/libs/interfaces/mail";
import { WEB_SERVICES } from "@/services";

import "./style.scss";

const Home = () => {
  const dummyData = [
    {
      title: "Pamerkan dan sematkan karya anda",
    },
    {
      title: "Publikasikan di seluruh saluran sosial dengan sekali klik",
    },
    {
      title: "Jual video Anda di seluruh dunia",
    },
  ];
  const { data } = useQuery(["products"], () => WEB_SERVICES.Product.getProducts());
  const { mutate, isLoading } = useMutation(["send-email"], (payload: IContact) =>
    WEB_SERVICES.Mail.sendContact(payload),
  );

  const handleFinish = (values: IContact) => {
    mutate(values);
  };
  return (
    <BaseLayout>
      <div className="pd-home">
        <Row className="pd-home-container">
          <Col xs={24} lg={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={MotorLogo}
                alt="motor"
                width="100%"
                height="100%"
                style={{
                  maxWidth: 450,
                  maxHeight: 280,
                  objectFit: "contain",
                }}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="pd-home-main-wrapper">
              <div className="pd-home-main-title">Investasi Terbaik bagi Masa Depan</div>
              <div className="pd-home-main-subtitle">
                Dalam upaya memperluas jangkauan, kami menerima setiap individu yang tertarik pada
                investasi untuk bergabung dalam Peluang Investasi Condotel.
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
                    PRODUK
                  </Button>
                </div>
              </ConfigProvider>
            </div>
          </Col>
        </Row>
        <div className="pd-home-project">
          <div className="pd-home-project-title">Fitur Ekskusif untuk Project Selanjutnya</div>
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="youtube"
          />
          <div className="pd-home-project-subtitle">
            Semua elemen UI dibuat menggunakan Nested Symbols dan styles yang terhubung satu sama
            lain
          </div>
        </div>
        <div className="pd-home-products">
          <div className="pd-home-products-title">Jelajahi Produk Kami</div>
          <Row
            gutter={[40, 40]}
            style={{
              maxWidth: 900,
            }}
          >
            {data?.data.slice(0, 6).map((product) => (
              <Col xs={24} sm={12} lg={8} key={product.title}>
                <div className="pd-home-products-card">
                  <img src={product.fakepath} alt={product.title} width={100} height={70} />
                  <div className="pd-home-products-card-title">{product.title}</div>
                  <div className="pd-home-products-card-description">{product.description}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <Row className="pd-home-content">
          <Col xs={24} lg={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={MotorBodyLogo}
                alt="motor"
                width="100%"
                height="100%"
                style={{
                  maxWidth: 450,
                  maxHeight: 280,
                  objectFit: "contain",
                }}
              />
            </div>
          </Col>
          <Col
            xs={24}
            lg={12}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div className="pd-home-content-title">
              Buat judul pada dua baris dapat mengubah pengunjung anda menjadi pengguna, dan
              dapatkan lebih banyak lagi.{" "}
            </div>
            <div className="pd-home-content-subtitle">
              Terpisah mereka tinggal di Bookmark tepat di pantai Semantik yang terkenal, samudra
              bahasa besar Terpisah mereka tinggal di Bookmark tepat di pantai
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
          <div className="pd-home-product-inquiry-title">Pertanyaan seputar Produk</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Row
              style={{
                maxWidth: 900,
              }}
            >
              <Col
                xs={24}
                lg={{
                  span: 11,
                  offset: 1,
                }}
              >
                <div className="pd-home-product-inquiry-form">
                  <Form name="basic" autoComplete="off" layout="vertical" onFinish={handleFinish}>
                    <Form.Item label="Email" name="email">
                      <Input size="large" className="pd-home-product-inquiry-form-input" />
                    </Form.Item>
                    <Row>
                      <Col span={11}>
                        <Form.Item label="Nama Anda" name="name">
                          <Input size="large" className="pd-home-product-inquiry-form-input" />
                        </Form.Item>
                      </Col>
                      <Col span={11} offset={2}>
                        <Form.Item label="No Handphone" name="subject">
                          <Input size="large" className="pd-home-product-inquiry-form-input" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Pesan Anda" name="message">
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
                        loading={isLoading}
                      >
                        KIRIM
                      </Button>
                    </ConfigProvider>
                  </Form>
                </div>
              </Col>
              <Col
                xs={24}
                lg={{
                  span: 11,
                  offset: 1,
                }}
                className="pd-home-product-inquiry-map"
              >
                <img src={MapImage} alt="map" width={450} height={300} />
                <Row>
                  <Col span={24}>
                    <div className="pd-home-product-inquiry-map-title">Hubungi Kami</div>
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
