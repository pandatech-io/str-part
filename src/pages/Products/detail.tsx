import { LeftOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import BaseLayout from "@/layouts/baseLayout";
import { WEB_SERVICES } from "@/services";

import "./style.scss";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data } = useQuery(["detail-product"], () => WEB_SERVICES.Product.getProduct(id), {
    enabled: !!id,
  });

  return (
    <BaseLayout>
      <div className="pd-products">
        <div className="pd-products-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginBottom: 48,
            }}
          >
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => navigate("/products")}
              role="presentation"
            >
              <LeftOutlined
                style={{
                  fontSize: 32,
                }}
              />
            </div>
            <div
              className="pd-products-title"
              style={{
                margin: 0,
              }}
            >
              Produk Kami
            </div>
          </div>
          <img
            src={data?.data.fakepath}
            alt={data?.data.title}
            height={200}
            width="100%"
            style={{ objectFit: "contain" }}
          />
          <div className="pd-products-detail-title">{data?.data.title}</div>
          <div className="pd-products-detail-description">{data?.data.description}</div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Detail;
