import ContactForm from "@/components/contact";
import BaseLayout from "@/layouts/baseLayout";

import "./style.scss";

const Contact = () => {
  return (
    <BaseLayout>
      <div className="banner">Silahkan Hubungi Kami</div>
      <div className="pd-contact">
        <div className="pd-contact-product-inquiry">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="pd-contact-product-inquiry-title">Pertanyaan seputar Produk</div>
          </div>
          <ContactForm />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Contact;
