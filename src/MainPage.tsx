import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PinkButton,
  BlueButton,
  GreenButton,
  RedButton,
  YellowButton,
  CyanButton,
  GrayButton,
  LightButton,
  DarkButton,
  PurpleButton,
} from "@austinjang/nuclear-library";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem("nickname");

  const handleLogout = () => {
    sessionStorage.removeItem("nickname");
    // SessionStorage 변경 이벤트 발생
    window.dispatchEvent(new Event("sessionStorageChange"));
    navigate("/login");
  };

  const handleButtonClick = async (buttonName: string) => {
    console.log(`${buttonName} 클릭됨!`);

    // 일반 버튼들은 hacked-backend로 요청 전송
    try {
      const response = await fetch(
        "https://hacked-backend.onrender.com/api/button-click",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            buttonType: buttonName.toLowerCase().replace("button", ""),
            nickname: nickname,
          }),
        }
      );

      if (response.ok) {
        console.log(`${buttonName} 클릭이 hacked-backend로 전송됨`);
      }
    } catch (error) {
      console.error("hacked-backend 전송 실패:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚨 Hacked System - Demo
          </h1>
          <p className="text-lg text-gray-600">
            hack-library를 사용한 해킹 데모 시스템
          </p>
          <div className="mt-4 flex justify-center items-center space-x-4">
            <p className="text-sm text-gray-500">
              로그인된 사용자:{" "}
              <span className="font-semibold text-red-600">{nickname}</span>
            </p>
            <button
              onClick={handleLogout}
              className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              로그아웃
            </button>
          </div>
        </header>

        {/* 10개의 버튼들 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            🎨 hack-library 개별 색상 버튼 컴포넌트들
          </h2>
          <p className="text-center text-gray-600 mb-8">
            각 컴포넌트는 자동으로 해당 색상이 적용됩니다
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <PinkButton
                onClick={() => handleButtonClick("PinkButton")}
                className="mb-2"
              >
                PinkButton
              </PinkButton>
              <p className="text-xs text-gray-500">PinkButton</p>
            </div>

            <div className="text-center">
              <BlueButton
                onClick={() => handleButtonClick("BlueButton")}
                className="mb-2"
              >
                BlueButton
              </BlueButton>
              <p className="text-xs text-gray-500">BlueButton</p>
            </div>

            <div className="text-center">
              <GreenButton
                onClick={() => handleButtonClick("GreenButton")}
                className="mb-2"
              >
                GreenButton
              </GreenButton>
              <p className="text-xs text-gray-500">GreenButton</p>
            </div>

            <div className="text-center">
              <RedButton
                onClick={() => handleButtonClick("RedButton")}
                className="mb-2"
              >
                RedButton
              </RedButton>
              <p className="text-xs text-gray-500">RedButton</p>
            </div>

            <div className="text-center">
              <YellowButton
                onClick={() => handleButtonClick("YellowButton")}
                className="mb-2"
              >
                YellowButton
              </YellowButton>
              <p className="text-xs text-gray-500">YellowButton</p>
            </div>

            <div className="text-center">
              <CyanButton
                onClick={() => handleButtonClick("CyanButton")}
                className="mb-2"
              >
                CyanButton
              </CyanButton>
              <p className="text-xs text-gray-500">CyanButton</p>
            </div>

            <div className="text-center">
              <GrayButton
                onClick={() => handleButtonClick("GrayButton")}
                className="mb-2"
              >
                GrayButton
              </GrayButton>
              <p className="text-xs text-gray-500">GrayButton</p>
            </div>

            <div className="text-center">
              <LightButton
                onClick={() => handleButtonClick("LightButton")}
                className="mb-2"
              >
                LightButton
              </LightButton>
              <p className="text-xs text-gray-500">LightButton</p>
            </div>

            <div className="text-center">
              <DarkButton
                onClick={() => handleButtonClick("DarkButton")}
                className="mb-2"
              >
                DarkButton
              </DarkButton>
              <p className="text-xs text-gray-500">DarkButton</p>
            </div>

            <div className="text-center">
              <PurpleButton
                onClick={() => handleButtonClick("PurpleButton")}
                className="mb-2"
              >
                PurpleButton
              </PurpleButton>
              <p className="text-xs text-gray-500">PurpleButton</p>
              {/* <p className="text-xs text-red-500 font-semibold">
                ⚠️ 스텔스 기능
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
