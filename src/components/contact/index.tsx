import { useMutation } from "@tanstack/react-query";
import { Button, Col, ConfigProvider, Form, Input, Row } from "antd";

import MapImage from "@/assets/map.webp";
import useNotification from "@/hooks/useNotification";
import { IContact } from "@/libs/interfaces/mail";
import { WEB_SERVICES } from "@/services";

import "./style.scss";

const Contact = () => {
  const { addSuccess } = useNotification();
  const [form] = Form.useForm();

  const { mutate, isLoading } = useMutation(
    ["send-email"],
    (payload: IContact) => WEB_SERVICES.Mail.sendContact(payload),
    {
      onSuccess: () => {
        addSuccess("Berhasil terkirim!");
        form.resetFields();
      },
    },
  );

  const handleFinish = (values: IContact) => {
    mutate(values);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Row
        style={{
          maxWidth: 1024,
        }}
      >
        <Col
          xs={24}
          lg={{
            span: 11,
            offset: 1,
          }}
        >
          <div className="pd-contact-form">
            <Form name="basic" autoComplete="off" layout="vertical" onFinish={handleFinish}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Harap masukkan email!" },
                  { type: "email", message: "Email tidak valid!" },
                ]}
              >
                <Input size="large" className="pd-contact-form-input" />
              </Form.Item>
              <Row>
                <Col span={11}>
                  <Form.Item
                    label="Nama Anda"
                    name="name"
                    rules={[{ required: true, message: "Harap masukkan nama anda!" }]}
                  >
                    <Input size="large" className="pd-contact-form-input" />
                  </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                  <Form.Item
                    label="No Handphone"
                    name="subject"
                    rules={[
                      { required: true, message: "Harap masukkan no anda!" },
                      { pattern: new RegExp(/^[0-9]+$/), message: "No tidak valid!" },
                    ]}
                  >
                    <Input size="large" className="pd-contact-form-input" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Pesan Anda"
                name="content"
                rules={[{ required: true, message: "Harap masukkan pesan!" }]}
              >
                <Input size="large" className="pd-contact-form-input" />
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
          className="pd-contact-map"
        >
          <img src={MapImage} alt="map" width={450} height={300} />
          <Row>
            <Col span={24}>
              <div className="pd-contact-map-title">Hubungi Kami</div>
            </Col>
            <Col span={11} className="pd-contact-map-description">
              San Francisco, 28 Eva Mountain Suite 942.
            </Col>
            <Col span={11} offset={2} className="pd-contact-map-description">
              alexei@getcraftwork.com +8 (477) 539-404-6542
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
