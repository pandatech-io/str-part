import Footer from "./partials/footer";
import Header from "./partials/header";
import { IBase } from "@/libs/interfaces/base";

const BaseLayout = ({ children }: IBase) => {
  return (
    <div>
      <Header />
      <div
        style={{
          paddingTop: 8,
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
