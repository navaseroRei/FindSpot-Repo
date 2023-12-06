import React from "react";
import { IMAGES } from "../common/image";

const EmailVerificationModal = () => {
  return (
    <div>
      <div className=" ml-[56%] absolute w-[30%]  top-20  z-[200] flex">
        <div className="  bg-gradient-to-t from-[#061A40]/90 to-[#003559]/90  h-full w-full rounded-sm  backdrop-blur-sm flex flex-col font-normal text-white items-start text-lg p-10 ">
          <div className=" grid self-center w-full h-full p-8 bg-[#D9D9D9] flex-wrap  backdrop-blur-sm bg-opacity-20 rounded-md">
            <div className="justify-self-center">
              <img
                src={IMAGES.ic_check}
                alt="searchbtn"
                className="hover:scale-125 transition duration-500 cursor-pointer object-contain self-center "
              />
            </div>
            <h2 className=" text-center text-4xl mt-2">
              Email Verification Sent!
            </h2>
            <div className="self-center justify-self-center">
              <p className=" text-center mt-4 text-sm w-full">
                An email has been sent to the address linked with
                fullname@gmail.com. If this email is associated with FINDSPOT,
                you will have the option to reset your password.
              </p>
            </div>

            <div className="bg-[#05AAE3] mx-[10%] hover:scale-110 transition duration-500 mt-8 flex flex-row  rounded-md p-2">
              <button className="w-full h-full cursor-pointer  ">
                Back to Login
              </button>
            </div>
            <div className="mx-[10%] mt-2 flex flex-row justify-center items-center rounded-md p-2">
              <p className="text-sm font-normal">
                Dont have an account?
                <a
                  href="#"
                  className="ml-1 text-sm text-white font-medium hover:underline"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationModal;
