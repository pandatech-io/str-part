import BeIcon from "@/assets/be.svg";
import GoogleIcon from "@/assets/google.svg";
import Rectangle from "@/assets/rectangle.png";
import TwitterIcon from "@/assets/twitter.svg";

import "./styles.scss";

const Footer = () => {
  const IconFooter = [
    {
      img: BeIcon,
      name: "be icon",
    },
    {
      img: GoogleIcon,
      name: "google icon",
    },
    {
      img: TwitterIcon,
      name: "twitter icon",
    },
  ];
  return (
    <div className="pd-footer">
      <div className="pd-footer-container">
        <img
          src={Rectangle}
          alt="rectangle"
          width={135}
          height={50}
          style={{
            width: 135,
            height: 50,
            objectFit: "contain",
          }}
        />
        <div>
          <div className="pd-footer-address">36 Rue Geoffroy-Saint-Hilaire, 75005 Paris</div>
          <div className="pd-footer-address">800-4321-5182</div>
        </div>
        <div className="pd-footer-logo-wrapper">
          {IconFooter.map((icon) => (
            <div className="pd-footer-logo" key={icon.name}>
              <img
                src={icon.img}
                alt={icon.name}
                width={15}
                height={10}
                style={{
                  objectFit: "contain",
                  width: 15,
                  height: 10,
                }}
              />
            </div>
          ))}
        </div>
        <div className="pd-footer-copyright">© 2017 getcraftwork.com. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
