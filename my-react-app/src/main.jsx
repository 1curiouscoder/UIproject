import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Background from "./components/Background";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Background />
  </StrictMode>
);