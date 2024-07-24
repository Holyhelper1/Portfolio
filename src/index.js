import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Portfolio } from "./portfolio";
import { LanguageProvider } from "./utils";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  </React.StrictMode>
);
