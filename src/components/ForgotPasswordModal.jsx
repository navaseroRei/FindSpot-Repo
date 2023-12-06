import React from "react";
import { IMAGES } from "../common/image";
import { useModal } from "../common/context/myContext";

const ForgotPasswordModal = () => {
    const {modal, openModal} = useModal();
  return (
    <div>
      <div className=" ml-[56%] absolute w-[30%]  top-20  z-[200] flex">
        <div className="  bg-gradient-to-t from-[#061A40]/90 to-[#003559]/90  h-full w-full rounded-sm  backdrop-blur-sm flex flex-col font-normal text-white items-start text-lg p-10 ">
          <div className="self-center w-full h-full p-8 bg-[#D9D9D9] flex-wrap  backdrop-blur-sm bg-opacity-20 rounded-md">
            <h2 className=" text-center text-4xl">Forgot your Password?</h2>
            <div className="self-center justify-self-center">
              <p className=" text-center mt-4 text-sm w-full">
                Please provide us with the email address associated with your
                account so that we can send you detailed instructions to reset
                your password securely.
              </p>
            </div>

            <div className=" bg-[#d9d9d9]/10 mx-[10%] mt-10   flex flex-row  rounded-md p-2">
              <img
                src={IMAGES.ic_mail}
                alt="searchbtn"
                className="ml-2 hover:scale-125 transition duration-500 cursor-pointer object-contain h-6 w-6 self-center "
              />
              <input
                type="text"
                placeholder="Enter your email address"
                className="ml-2 bg-transparent"
              />
            </div>

            <div className="bg-[#05AAE3] mx-[10%] mt-8 flex flex-row hover:scale-110 transition duration-500 rounded-md p-2">
              <button className="w-full h-full cursor-pointer"
              onClick={() => openModal("EmailVerificationModal")}
              >
                Reset Password
              </button>
            </div>
            <div className="mx-[10%] mt-2 flex flex-row justify-center items-center rounded-md p-2">
              <p className="text-sm font-normal">
                Already have an account?
                <a
                  href="#"
                  className="ml-1 text-sm text-white font-medium hover:underline"
                  onClick={() => openModal("LoginModal")}
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
