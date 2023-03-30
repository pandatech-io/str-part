import * as React from "react";

import { useQuery } from "@tanstack/react-query";
import { Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useNavigate } from "react-router-dom";

import useMediaQuery from "@/hooks/useMediaQuery";
import BaseLayout from "@/layouts/baseLayout";
import { WEB_SERVICES } from "@/services";

import "./style.scss";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = React.useState(0);
  const navigate = useNavigate();
  const { data: categories } = useQuery(
    ["categories"],
    () => WEB_SERVICES.Category.getCategories(),
    {
      onSuccess: (data) => {
        if (data.data.length > 0) {
          setSelectedCategories(data.data[0].id);
        }
      },
    },
  );
  const { data: category } = useQuery(
    ["category", selectedCategories],
    () => WEB_SERVICES.Category.getCategory(selectedCategories),
    {
      enabled: !!categories?.data.length && selectedCategories > 0,
    },
  );
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onChange = (key: string) => {
    setSelectedCategories(Number(key));
  };

  const items: TabsProps["items"] = categories?.data.map((data) => ({
    key: data.id.toString(),
    label: data.title,
    children: (
      <Row gutter={[24, 24]}>
        {category?.data.Products.map((product) => (
          <Col span={24} key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
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
                <div className="pd-products-card-description">{product.description}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    ),
  }));
  return (
    <BaseLayout>
      <div className="pd-products">
        <div className="pd-products-container">
          <div className="pd-products-title">Produk Kami</div>
          {isMobile ? (
            <Tabs
              defaultActiveKey={selectedCategories.toString()}
              items={items}
              onChange={onChange}
            />
          ) : (
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
                <Row gutter={[32, 32]}>
                  {category?.data.Products.map((product) => (
                    <Col
                      md={12}
                      lg={8}
                      key={product.id}
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
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
                          <div className="pd-products-card-description">{product.description}</div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Products;
