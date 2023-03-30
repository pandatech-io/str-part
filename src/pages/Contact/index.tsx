import ContactForm from "@/components/contact";
import BaseLayout from "@/layouts/baseLayout";

import "./style.scss";

const Contact = () => {
  return (
    <BaseLayout>
      <div className="pd-contact">
        <div className="pd-contact-product-inquiry">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="pd-contact-product-inquiry-title">Hubungi Kami!</div>
          </div>
          <ContactForm />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Contact;
