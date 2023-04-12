import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

import MotorBodyLogo from "@/assets/motor.webp";
import Opening from "@/assets/opening.mp4";
import Product1 from "@/assets/product1.png";
import Product2 from "@/assets/product2.png";
import Product3 from "@/assets/product3.png";
import Contact from "@/components/contact";
import BaseLayout from "@/layouts/baseLayout";

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
  const products = [
    {
      title: "Baru di Diluncurkan",
      description: "Fitur ini membantu anda untuk menonjolkan project anda dari para pesaing",
      img: Product1,
    },
    {
      title: "Berita Menarik",
      description: "Fitur ini membantu anda untuk menonjolkan project anda dari para pesaing",
      img: Product2,
    },
    {
      title: "Cerita Insider",
      description: "Fitur ini membantu anda untuk menonjolkan project anda dari para pesaing",
      img: Product3,
    },
  ];

  const navigate = useNavigate();

  return (
    <BaseLayout>
      <div className="pd-home">
        <video width="100%" autoPlay muted loop>
          <source src={Opening} type="video/mp4" />
        </video>
        <div className="pd-home-products">
          <div className="pd-home-products-title">Jelajahi Produk Kami</div>
          <Row
            gutter={[40, 40]}
            style={{
              maxWidth: 900,
            }}
          >
            {products.map((product) => (
              <Col xs={24} sm={12} lg={8} key={product.title}>
                <div className="pd-home-products-card">
                  <img src={product.img} alt={product.title} width={100} height={70} />
                  <div className="pd-home-products-card-title">{product.title}</div>
                  <div className="pd-home-products-card-description">{product.description}</div>
                </div>
              </Col>
            ))}
          </Row>
          <Row
            justify="center"
            gutter={[40, 40]}
            style={{
              maxWidth: 900,
            }}
          >
            <Col span={24}>
              <Button
                type="primary"
                size="large"
                style={{
                  width: "fit-content",
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontSize: 14,
                  padding: "14px 40px",
                  height: "fit-content",
                }}
                onClick={() => navigate("/products")}
              >
                Produk
              </Button>
            </Col>
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
                      minWidth: 18,
                      minHeight: 18,
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
        <Row className="pd-home-content">
          <Col
            xs={24}
            lg={12}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div className="pd-home-content-title">Lorem Ipsum</div>
            <div className="pd-home-content-subtitle">
              Lorem ipsum dolor sit amet consectetur. Massa nunc elementum pharetra nec potenti in
              quis. Amet nam habitant neque malesuada velit ut duis aliquam. Amet massa rutrum nulla
              etiam. Venenatis vel nibh arcu consectetur. Euismod et risus pellentesque varius
              lacus. Aliquam amet feugiat duis diam lorem sed congue egestas.
            </div>
            <Button
              type="primary"
              size="large"
              style={{
                width: "fit-content",
                letterSpacing: 4,
                textTransform: "uppercase",
                fontSize: 14,
                padding: "14px 40px",
                height: "fit-content",
              }}
            >
              lorem ipsum
            </Button>
          </Col>
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
        </Row>
        <div className="pd-home-product-inquiry">
          <div className="pd-home-product-inquiry-title">Pertanyaan seputar Produk</div>
          <Contact />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
