import * as React from "react";

import { useQuery } from "@tanstack/react-query";
import { Button, Col, Dropdown, Empty, Modal, Pagination, Row, Spin } from "antd";

import Hamburger from "@/assets/hamburger";
import useMediaQuery from "@/hooks/useMediaQuery";
import BaseLayout from "@/layouts/baseLayout";
import { ICategory } from "@/libs/interfaces/categories";
import { IResponse } from "@/libs/interfaces/response";
import { WEB_SERVICES } from "@/services";

import "./style.scss";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = React.useState(0);
  const [selectedProduct, setSelectedProduct] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const isTablet = useMediaQuery("(max-width: 768px)");

  const { data: categories } = useQuery(
    ["categories"],
    () => WEB_SERVICES.Category.getCategories(),
    {
      onSuccess: (data) => {
        if (data.data.length > 0) {
          setSelectedCategories(0);
        }
      },
      refetchOnWindowFocus: false,
      select: React.useCallback((data: IResponse<ICategory[]>) => {
        const newData = data;

        // move object with title "Lainnya to last element"
        const index = data.data.findIndex((obj) => obj.title === "Lainnya");
        const lainnyaObj = data.data.splice(index, 1)[0];
        newData.data.push(lainnyaObj);

        // Add object "Semua Produk" to first element
        newData.data.unshift({
          id: 0,
          title: "Semua Produk",
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        return newData;
      }, []),
    },
  );

  const { data: products, isFetching } = useQuery(
    ["products", selectedCategories, page],
    () => WEB_SERVICES.Product.getProducts(page, 12, selectedCategories),
    {
      refetchOnWindowFocus: false,
    },
  );

  const newProducts = products?.data || [];
  const pagination = products?.metadata;
  const totalPage = pagination && Math.ceil(pagination?.total / pagination?.limit);

  const RenderModal = () => {
    const findProduct = newProducts.findIndex((product) => product.id === selectedProduct);
    const product = newProducts?.[findProduct as number];
    return (
      <Modal
        open={selectedProduct > 0}
        title={product?.title}
        onCancel={() => setSelectedProduct(-1)}
        footer={null}
      >
        <img
          src={"https://cms.strpart.com/" + product?.thumbnail_path}
          alt={product?.title}
          width="100%"
        />
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
                          onClick={() => {
                            setOpen(false);
                            setSelectedCategories(category.id);
                            setPage(1);
                          }}
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
              <Row gutter={[24, 24]} justify={newProducts?.length < 1 ? "center" : "start"}>
                {newProducts?.length < 1 ? (
                  <Empty />
                ) : (
                  <React.Fragment>
                    {newProducts.map((product) => (
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
                            src={"https://cms.strpart.com/" + product.thumbnail_path}
                            alt={product.title}
                            width="100%"
                            height="100%"
                            style={{ objectFit: "contain" }}
                          />
                          <div className="pd-products-card-title">{product.title}</div>
                          <div className="pd-products-card-hover">
                            <div className="pd-products-card-hover-title">{product.title}</div>
                            <div
                              className="pd-products-card-hover-description"
                              dangerouslySetInnerHTML={{
                                __html:
                                  product.description.length > 150
                                    ? product.description.slice(0, 150) + "..."
                                    : product.description,
                              }}
                            />
                          </div>
                        </div>
                      </Col>
                    ))}
                  </React.Fragment>
                )}
              </Row>

              <div
                style={{
                  marginTop: 48,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  alignItems: "center",
                }}
              >
                <Pagination
                  total={pagination?.total}
                  onChange={(page) => setPage(page)}
                  current={page}
                  showSizeChanger={false}
                />

                {pagination && (
                  <div
                    style={{
                      color: "#ABAFB0",
                      fontWeight: 400,
                    }}
                  >
                    {products.data.length === 0
                      ? "No items found"
                      : `Showing ${page == 1 ? 1 : (page - 1) * pagination.limit + 1} - ${
                          page == totalPage
                            ? (page - 1) * pagination.limit + products.data.length
                            : page * pagination.limit
                        } of ${pagination.total} entries`}
                  </div>
                )}
              </div>
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
                    onClick={() => {
                      setPage(1);
                      setSelectedCategories(category.id);
                    }}
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
                  <Row gutter={[32, 32]} justify={newProducts?.length < 1 ? "center" : "start"}>
                    {newProducts?.length < 1 ? (
                      <Empty />
                    ) : (
                      <React.Fragment>
                        {newProducts?.map((product) => (
                          <Col
                            md={12}
                            lg={8}
                            key={product.id}
                            onClick={() => setSelectedProduct(product.id)}
                          >
                            <div className="pd-products-card">
                              <img
                                src={"https://cms.strpart.com/" + product.thumbnail_path}
                                alt={product.title}
                                width="100%"
                                height="100%"
                                style={{ objectFit: "contain" }}
                              />
                              <div className="pd-products-card-title">{product.title}</div>
                              <div className="pd-products-card-hover">
                                <div className="pd-products-card-hover-title">{product.title}</div>
                                <div
                                  className="pd-products-card-hover-description"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      product.description.length > 150
                                        ? product.description.slice(0, 150) + "..."
                                        : product.description,
                                  }}
                                />
                              </div>
                            </div>
                          </Col>
                        ))}
                      </React.Fragment>
                    )}
                  </Row>
                )}

                <Row justify="space-between" align="middle" style={{ marginTop: 50 }}>
                  {pagination && (
                    <Col
                      span={8}
                      style={{
                        color: "#ABAFB0",
                        fontWeight: 400,
                      }}
                    >
                      {products.data.length === 0
                        ? "No items found"
                        : `Showing ${page == 1 ? 1 : (page - 1) * pagination.limit + 1} - ${
                            page == totalPage
                              ? (page - 1) * pagination.limit + products.data.length
                              : page * pagination.limit
                          } of ${pagination.total} entries`}
                    </Col>
                  )}
                  {products && (
                    <Col span={8} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <Pagination
                        total={pagination?.total}
                        onChange={(page) => setPage(page)}
                        current={page}
                        showSizeChanger={false}
                        pageSize={12}
                      />
                    </Col>
                  )}
                </Row>
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
