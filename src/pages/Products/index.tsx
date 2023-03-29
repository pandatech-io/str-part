import { Col, Row } from "antd";

import BaseLayout from "@/layouts/baseLayout";

import "./style.scss";

const Products = () => {
  const categories = ["All", "Kampas", "Bulbs", "Clutch"];
  const products = [
    {
      name: "Rem Kampas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
    },
    {
      name: "Rem Kampas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
    },
    {
      name: "Rem Kampas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
    },
    {
      name: "Rem Kampas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1667745068/Products/silver_llziwd.png",
    },
  ];
  return (
    <BaseLayout>
      <div className="pd-products">
        <div className="pd-products-container">
          <div className="pd-products-title">Our Products</div>
          <Row>
            <Col span={2} className="pd-products-category">
              {categories.map((category, index) => (
                <div className="pd-products-category-title" key={index}>
                  {category}
                </div>
              ))}
            </Col>
            <Col span={20} offset={2}>
              <img
                src={products[0].image}
                alt={products[0].name}
                height={200}
                width="100%"
                style={{ objectFit: "contain" }}
              />
              <div className="pd-products-detail-title">{products[0].name}</div>
              <div className="pd-products-detail-description">{products[0].description}</div>
              {/* <Row gutter={[32, 32]}>
                {products.map((product) => (
                  <Col span={8}>
                    <div className="pd-products-card">
                      <img
                        src={product.image}
                        alt={product.name}
                        width="100%"
                        height="100%"
                        style={{ objectFit: "contain" }}
                      />
                      <div className="pd-products-card-hover">
                        <div className="pd-products-card-title">{product.name}</div>
                        <div className="pd-products-card-description">{product.description}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row> */}
            </Col>
          </Row>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Products;
