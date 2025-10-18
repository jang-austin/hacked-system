import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./App.css";

// 환경 변수를 전역으로 설정 (PurpleButton에서 사용)
(window as any).__VITE_NODE_ENV__ = import.meta.env.VITE_NODE_ENV;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
