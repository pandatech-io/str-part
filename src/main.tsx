import React from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";

import App from "./App";

import "antd/dist/reset.css";
import "@/index.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#F5A623",
          },
        }}
      >
        <App />
      </ConfigProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
