import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/Home.css";
import "./styles/Login.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2000,
        style: {
          background: "#333",
          color: "#fff",
          borderRadius: "10px",
        },
      }}
    />
  </React.StrictMode>
);
