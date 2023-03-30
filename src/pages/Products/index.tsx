import * as React from "react";

import { useQuery } from "@tanstack/react-query";
import { Col, Row } from "antd";

import BaseLayout from "@/layouts/baseLayout";
import { WEB_SERVICES } from "@/services";

import "./style.scss";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = React.useState(0);
  const { data: products } = useQuery(["products"], () => WEB_SERVICES.Product.getProducts());
  const { data: categories } = useQuery(["categories"], () =>
    WEB_SERVICES.Category.getCategories(),
  );
  const { data: category } = useQuery(
    ["category", selectedCategories],
    () => WEB_SERVICES.Category.getCategory(selectedCategories),
    {
      enabled: selectedCategories > 0,
    },
  );
  return (
    <BaseLayout>
      <div className="pd-products">
        <div className="pd-products-container">
          <div className="pd-products-title">Our Products</div>
          <Row>
            <Col span={2} className="pd-products-category">
              {categories?.data.map((category, index) => (
                <div
                  className={`pd-products-category-title ${
                    selectedCategories === category.id && "active"
                  }`}
                  key={index}
                  onClick={() => setSelectedCategories(category.id)}
                  role="presentation"
                >
                  {category.title}
                </div>
              ))}
            </Col>
            <Col span={20} offset={2}>
              {/* <img
                src={products[0].image}
                alt={products[0].name}
                height={200}
                width="100%"
                style={{ objectFit: "contain" }}
              />
              <div className="pd-products-detail-title">{products[0].name}</div>
              <div className="pd-products-detail-description">{products[0].description}</div> */}
              <Row gutter={[32, 32]}>
                {selectedCategories > 0 ? (
                  <React.Fragment>
                    {category?.data.Products.map((product) => (
                      <Col md={12} lg={8} key={product.id}>
                        <div className="pd-products-card">
                          <img
                            src={product.fakepath}
                            alt={product.title}
                            width="100%"
                            height="100%"
                            style={{ objectFit: "contain" }}
                          />
                          <div className="pd-products-card-hover">
                            <div className="pd-products-card-title">{product.title}</div>
                            <div className="pd-products-card-description">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {products?.data.map((product) => (
                      <Col md={12} lg={8} key={product.id}>
                        <div className="pd-products-card">
                          <img
                            src={product.fakepath}
                            alt={product.title}
                            width="100%"
                            height="100%"
                            style={{ objectFit: "contain" }}
                          />
                          <div className="pd-products-card-hover">
                            <div className="pd-products-card-title">{product.title}</div>
                            <div className="pd-products-card-description">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </React.Fragment>
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Products;
