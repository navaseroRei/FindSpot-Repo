import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { useModal, openModal } from "../common/context/myContext";

const AuthModal = ({ onClose }) => {
  const { modal, openModal } = useModal();

  // const handleClose = (e) => {
  //   if (e.target.id === "wrapper") onClose();
  // };
  return (
    <div
      className=" absolute inset-0  top-20 mx-[14%] justify-end z-[200] flex"
      id="wrapper"
      // onClick={handleClose}
      onClose={onClose}
    >
      <div>
        <div className="bg-[#121F42]  rounded-sm bg-opacity-90 backdrop-blur-sm flex flex-col font-normal text-white items-start text-lg p-8 ">
          <button
            className="hover:bg-sky-500 rounded-md cursor-pointer p-2"
            onClick={() => openModal("LoginModal")}
          >
            Login
          </button>
          <button
            className="hover:bg-sky-500  rounded-md cursor-pointer p-2"
            onClick={() => openModal("RegisterModal")}
          >
            Sign up
          </button>
          <button className="hover:bg-sky-500  rounded-md cursor-pointer p-2 rounded-sm">
            List your place
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
