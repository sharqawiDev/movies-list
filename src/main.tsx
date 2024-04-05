import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={query}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
