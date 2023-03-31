import * as React from "react";

import { useQuery } from "@tanstack/react-query";
import { Col, Empty, Row, Spin, Tabs } from "antd";
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
      refetchOnWindowFocus: false,
    },
  );
  const { data: category, isFetching } = useQuery(
    ["category", selectedCategories],
    () => WEB_SERVICES.Category.getCategory(selectedCategories),
    {
      enabled: !!categories?.data.length && selectedCategories > 0,
      refetchOnWindowFocus: false,
    },
  );
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 444px)");

  const onChange = (key: string) => {
    setSelectedCategories(Number(key));
  };

  const items: TabsProps["items"] = categories?.data.map((data) => ({
    key: data.id.toString(),
    label: data.title,
    children: (
      <React.Fragment>
        {isFetching ? (
          <Row justify="center">
            <Col
              span={4}
              style={{
                marginTop: 32,
              }}
            >
              <Spin size="large" />
            </Col>
          </Row>
        ) : (
          <Row
            gutter={[24, 24]}
            justify={category?.data && category?.data?.Products?.length < 1 ? "center" : "start"}
          >
            {category?.data && category?.data?.Products?.length < 1 ? (
              <Empty />
            ) : (
              <React.Fragment>
                {category?.data.Products.map((product) => (
                  <Col
                    span={24}
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
              </React.Fragment>
            )}
          </Row>
        )}
      </React.Fragment>
    ),
  }));
  return (
    <BaseLayout>
      <div className="pd-products">
        <div className="pd-products-container">
          <div className="pd-products-title">Produk Kami</div>
          {isTablet ? (
            <Tabs
              defaultActiveKey={selectedCategories.toString()}
              items={items}
              style={{ width: isMobile ? 320 : 500 }}
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
                {isFetching ? (
                  <Row justify="center">
                    <Col span={4} style={{ marginTop: 32 }}>
                      <Spin size="large" />
                    </Col>
                  </Row>
                ) : (
                  <Row
                    gutter={[32, 32]}
                    justify={
                      category?.data && category?.data?.Products?.length < 1 ? "center" : "start"
                    }
                  >
                    {category?.data && category?.data?.Products?.length < 1 ? (
                      <Empty />
                    ) : (
                      <React.Fragment>
                        {category?.data?.Products?.map((product) => (
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
                )}
              </Col>
            </Row>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Products;
