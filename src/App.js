
import { useState } from "react";
import Home from "./screens/Home";
import LandingPage from "./screens/LandingPage";
import {MyContextProvider } from "./common/context/myContext";
import AuthenticationModal from "./components/AuthModal";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ResetPasswordModal from "./components/ResetPasswordModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";
import EmailVerificationModal from "./components/EmailVerificationModal";
import ModalManager from "./components/ModalManager";
function App() {
 

  return (
    <MyContextProvider >
      <ModalManager/>
      <LandingPage />
      <Home/>
    </MyContextProvider>
  );
}

export default App;
