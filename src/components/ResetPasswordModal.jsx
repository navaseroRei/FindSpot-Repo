import React from "react";
import { IMAGES } from "../common/image";

const ResetPasswordModal = () => {
  return (
    <div>
      <div className=" ml-[56%] absolute w-[30%]  top-20  z-[200] flex">
        <div className="  bg-gradient-to-t from-[#061A40]/90 to-[#003559]/90  h-full w-full rounded-sm  backdrop-blur-sm flex flex-col font-normal text-white items-start text-lg p-10 ">
          <div className="self-center w-full h-full p-8 bg-[#D9D9D9] flex-wrap  backdrop-blur-sm bg-opacity-20 rounded-md">
            <h2 className=" text-center text-4xl">Reset Your Password</h2>
            <p className="text-center">
              Please provide your password, making sure it's not the same as the
              one used before
            </p>

            <div className="bg-[#d9d9d9]/10  mx-[10%] mt-8  rounded-md p-2 content-center grid grid-flow-col ">
              <div className="flex space-x-2">
                <img
                  src={IMAGES.ic_lock}
                  alt="searchbtn"
                  className="ml-2  object-contain  self-center "
                />
                <input
                  type="password"
                  placeholder="Enter your new password"
                  className=" bg-transparent focus:outline-none"
                />
              </div>

              <div className="self-center justify-self-end absolute">
                <img
                  src={IMAGES.ic_hidden}
                  for="fullNameInputBox"
                  alt="searchbtn"
                  className=" hover:scale-125 transition duration-500 cursor-pointer object-contain mr-4"
                />
              </div>
            </div>
            <div className="bg-[#d9d9d9]/10  mx-[10%] mt-8  rounded-md p-2 content-center grid grid-flow-col ">
              <div className="flex space-x-2">
                <img
                  src={IMAGES.ic_lock}
                  alt="searchbtn"
                  className="ml-2  object-contain  self-center "
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className=" bg-transparent focus:outline-none"
                />
              </div>
              <div className="self-center justify-self-end">
                <img
                  src={IMAGES.ic_hidden}
                  for="fullNameInputBox"
                  alt="searchbtn"
                  className=" hover:scale-125 transition duration-500 cursor-pointer object-contain mr-4"
                />
              </div>
            </div>

            <div className="bg-[#05AAE3] mx-[10%] mt-8 flex flex-row hover:scale-110 transition duration-500 rounded-md p-2">
              <button className="w-full h-full cursor-pointer">
                Change Password
              </button>
            </div>
            <div className="mx-[10%] mt-2 flex flex-row justify-center items-center rounded-md p-2">
              <p className="text-sm font-normal">
                Already have an account?
                <a
                  href="#"
                  className="ml-1 text-sm text-white font-medium hover:underline"
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

export default ResetPasswordModal;
