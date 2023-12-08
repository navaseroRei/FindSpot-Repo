import React from "react";
import { useModal } from "../common/context/myContext";
import AuthModal from "./AuthModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import ResetPasswordModal from "./ResetPasswordModal";
import EmailVerificationModal from "./EmailVerificationModal";

const ModalLookup = {
  AuthModal: AuthModal,
  LoginModal: LoginModal,
  RegisterModal: RegisterModal,
  ForgotPasswordModal: ForgotPasswordModal,
  ResetPasswordModal: ResetPasswordModal,
  EmailVerificationModal: EmailVerificationModal,
};

const ModalManager = () => {
  const { modal, closeModal } = useModal();
  if (!modal) return null;
  const Modal = ModalLookup[modal];
  return <Modal onClose={closeModal} />;
};

export default ModalManager;
