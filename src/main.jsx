import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Web3Provider from "./lib/providers/provider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Web3Provider>
        <App />
      </Web3Provider>
    </BrowserRouter>
  </StrictMode>
);
