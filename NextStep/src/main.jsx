import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/Home.css"; // global styles
import "./styles/Login.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
