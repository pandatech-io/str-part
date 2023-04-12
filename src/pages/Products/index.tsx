import * as React from "react";

import { useQuery } from "@tanstack/react-query";
import { Button, Col, Dropdown, Empty, Modal, Row, Spin } from "antd";

import Hamburger from "@/assets/hamburger";
import useMediaQuery from "@/hooks/useMediaQuery";
import BaseLayout from "@/layouts/baseLayout";
import { WEB_SERVICES } from "@/services";

import "./style.scss";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = React.useState(0);
  const [selectedProduct, setSelectedProduct] = React.useState(-1);
  const [open, setOpen] = React.useState(false);

  const isTablet = useMediaQuery("(max-width: 768px)");

  const { data: categories } = useQuery(
    ["categories"],
    () => WEB_SERVICES.Category.getCategories(),
    {
      onSuccess: (data) => {
        if (data.data.length > 0) {
          setSelectedCategories(10);
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

  const RenderModal = () => {
    const findProduct = category?.data?.Products.findIndex(
      (product) => product.id === selectedProduct,
    );
    const product = category?.data?.Products?.[findProduct as number];
    return (
      <Modal
        open={selectedProduct > 0}
        title={product?.title}
        onCancel={() => setSelectedProduct(-1)}
        footer={null}
      >
        <img src={product?.fakepath} alt={product?.title} width="100%" />
        <div
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: "#1C1B24",
            marginTop: 16,
          }}
        >
          {product?.description}
        </div>
      </Modal>
    );
  };
  return (
    <BaseLayout>
      <div className="banner">Produk</div>
      <div className="pd-products">
        <div className="pd-products-container">
          <div className="pd-products-title">Produk Kami</div>
          {isTablet ? (
            <React.Fragment>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                <Dropdown
                  placement="bottom"
                  onOpenChange={(flag) => setOpen(flag)}
                  open={open}
                  trigger={["click"]}
                  dropdownRender={() => (
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
                        borderRadius: 5,
                      }}
                    >
                      {categories?.data.map((category) => (
                        <div
                          style={{
                            letterSpacing: 4,
                            textTransform: "uppercase",
                            fontSize: 14,
                            fontWeight: 400,
                            padding: "8px 16px",
                            textAlign: "center",
                            minWidth: 300,
                            backgroundColor:
                              selectedCategories === category.id ? "#0A2862" : "#ffffff",
                            color: selectedCategories === category.id ? "#ffffff" : "#1C1B24",
                          }}
                          onClick={() => setSelectedCategories(category.id)}
                          key={category.id}
                          role="presentation"
                        >
                          {category.title}
                        </div>
                      ))}
                    </div>
                  )}
                >
                  <Button
                    shape="default"
                    icon={<Hamburger />}
                    style={{
                      border: "none",
                    }}
                  />
                </Dropdown>
              </div>
              <Row
                gutter={[24, 24]}
                justify={
                  category?.data && category?.data?.Products?.length < 1 ? "center" : "start"
                }
              >
                {category?.data && category?.data?.Products?.length < 1 ? (
                  <Empty />
                ) : (
                  <React.Fragment>
                    {category?.data.Products.map((product) => (
                      <Col
                        xs={{
                          span: 24,
                        }}
                        sm={{
                          span: 12,
                        }}
                        key={product.id}
                        onClick={() => setSelectedProduct(product.id)}
                      >
                        <div className="pd-products-card">
                          <img
                            src={product.fakepath}
                            alt={product.title}
                            width="100%"
                            height="100%"
                            style={{ objectFit: "contain" }}
                          />
                          <div className="pd-products-card-title">{product.title}</div>
                          <div className="pd-products-card-hover">
                            <div className="pd-products-card-hover-title">{product.title}</div>
                            <div className="pd-products-card-hover-description">
                              {product.description.slice(0, 150) + "..."}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </React.Fragment>
                )}
              </Row>
            </React.Fragment>
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
                            onClick={() => setSelectedProduct(product.id)}
                          >
                            <div className="pd-products-card">
                              <img
                                src={product.fakepath}
                                alt={product.title}
                                width="100%"
                                height="100%"
                                style={{ objectFit: "contain" }}
                              />
                              <div className="pd-products-card-title">{product.title}</div>
                              <div className="pd-products-card-hover">
                                <div className="pd-products-card-hover-title">{product.title}</div>
                                <div className="pd-products-card-hover-description">
                                  {product.description.slice(0, 150) + "..."}
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

      <RenderModal />
    </BaseLayout>
  );
};

export default Products;
