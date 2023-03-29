import { lazy, Suspense } from "react";

import { Spin } from "antd";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const routes = [
  {
    Component: Home,
    path: "/",
  },
  {
    Component: Products,
    path: "/products",
  },
  {
    Component: About,
    path: "/about-us",
  },
  {
    Component: Contact,
    path: "/contact-us",
  },
];

const Routes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="loader-wrapper">
          <Spin size="large" />
        </div>
      }
    >
      <Switch>
        {routes.map(({ Component, ...entry }, key) => {
          return <Route key={key} {...entry} element={<Component />} />;
        })}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
