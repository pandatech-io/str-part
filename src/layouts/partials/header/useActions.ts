import * as React from "react";

const useActions = () => {
  const [transformActive, setTransformActive] = React.useState(true);
  const [mobileMenuVisible, setMobileMenuVisible] = React.useState(false);

  const handleMobileMenu = (isOpen = false) => {
    setMobileMenuVisible(isOpen);
  };

  React.useEffect(() => {
    let lastScrollTop = 0;

    const scrollToTop = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setTransformActive(false);
      } else {
        setTransformActive(true);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    window.addEventListener("scroll", scrollToTop);

    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  return {
    handleMobileMenu,
    mobileMenuVisible,
    transformActive,
  };
};

export default useActions;
