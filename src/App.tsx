import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import "./App.css";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    // SessionStorage에서 nickname 확인
    const nickname = sessionStorage.getItem("nickname");
    console.log("SessionStorage nickname:", nickname);
    setIsAuth(nickname !== null);
  }, []);
  console.log("isAuth:", isAuth);

  // 로딩 중일 때는 아무것도 렌더링하지 않음
  if (isAuth === null) {
    return <div>로딩 중...</div>;
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuth ? <Navigate to="/index" replace /> : <LoginPage />}
      />
      <Route
        path="/index"
        element={isAuth ? <MainPage /> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
