import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import "./App.css";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  // 인증 상태 확인 함수
  const checkAuth = () => {
    const nickname = sessionStorage.getItem("nickname");
    const authStatus = nickname !== null;
    setIsAuth(authStatus);
    return authStatus;
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // SessionStorage 변경 감지
  useEffect(() => {
    const handleStorageChange = () => {
      checkAuth();
    };

    // storage 이벤트 (다른 탭에서 변경)
    window.addEventListener("storage", handleStorageChange);

    // custom 이벤트 (같은 탭에서 변경)
    window.addEventListener("sessionStorageChange", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("sessionStorageChange", handleStorageChange);
    };
  }, []);

  // 로딩 중일 때는 아무것도 렌더링하지 않음
  if (isAuth === null) {
    return <div>로딩 중...</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuth ? "/index" : "/login"} replace />}
      />
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
