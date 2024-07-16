import React from "react";
import ReactDOM from "react-dom/client";
import queryClient from "./api/queryClient";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ErrorProvider } from "./context";
import "./i18n";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorProvider>
  </React.StrictMode>
);
