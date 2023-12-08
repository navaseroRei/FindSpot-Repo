import React from "react";
import {
  ic_location,
  ic_userprofile,
  logo,
  messageIcon,
  sample1,
  sampleKayak,
  settingsIcon,
  smallStar,
  tripIcon,
  wishlistIcon,
} from "../assets";
import styles from "../styles";
import Card from "./Card";
import { IMAGES } from "../common/image";

const DetailsSection = () => {
  const rating = 4.5;
  const reviewcount = 128;
  const guest = 2;
  return (
    <div className="bg-slate-900  top-0 left-0 w-full h-full">
      <div className="w-full px-[2rem] backdrop-blur-sm drop-shadow-md bg-white/10">
        <div className="flex container mx-auto px-6 py-2">
          <a href="#/">
            <img src={logo} alt="logo" />
          </a>
          <ul className="w-full  flex justify-end gap-6 items-center  ">
            <li
              className={`${styles.paragraph} ${styles.hoverNavbar} flex gap-2 p-2`}
            >
              <img src={tripIcon} alt="" />
              <a href="#trip">Trip History</a>
            </li>
            <li
              className={`${styles.paragraph} ${styles.hoverNavbar} flex gap-2 p-2`}
            >
              <img src={messageIcon} alt="" />
              <a href="#message">Message</a>
            </li>
            <li
              className={`${styles.paragraph} ${styles.hoverNavbar} flex gap-2 p-2`}
            >
              <img src={wishlistIcon} alt="" />
              <a href="#wishlist">Wishlist</a>
            </li>

            <li
              className={`${styles.paragraph} ${styles.hoverNavbar} flex gap-2 ml-[3rem] p-2`}
            >
              <a href="#settings">
                <img src={settingsIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`flex justify-center items-center space-x-20 mt-10`}>
        <div className="text-white">
          <div className="self-auto">
            <img src={sampleKayak} alt="big picture" className="w-full  " />
          </div>

          <div className=" grid grid-cols-3 space-x-2">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="text-white">
          <div>
            <h1 className="font-bold text-3xl">
              Floating Cottage in Aquascape Lake Caliraya{" "}
            </h1>
            <div className="flex mt-2">
              <img
                src={ic_userprofile}
                alt="searchbtn"
                className=" hover:scale-125 transition duration-500 cursor-pointer object-contain self-center "
              />
              <p className="ml-2">Hosted by: Aquascape Lake Caliraya</p>
            </div>
            <div className="flex mt-2">
              <img
                src={ic_location}
                alt="searchbtn"
                className=" hover:scale-125 transition duration-500 cursor-pointer object-contain self-center "
              />
              <p className="ml-2">
                Barangay Kanluran-West Talaongan , Cavinti, Philippines
              </p>
            </div>
            <div className=" grid rounded-t-xl w-full  backdrop-blur-sm drop-shadow-md bg-white/10 p-8 text-xl font-bold mt-4">
              {/*Price and Reviews */}
              <div className="flex justify-between items-center ">
                <div className="flex space-x-1">
                  <p className="text-[#FFFFFF]/50 line-through">P 3,799</p>
                  <p>P 3,799</p>
                  <p className="font-normal text-[#FFFFFF]/80">night</p>
                </div>

                <div className=" flex space-x-2 items-center">
                  <img
                    src={smallStar}
                    alt="searchbtn"
                    className=" hover:scale-125 transition duration-500 cursor-pointer object-contain self-center w-6 h-6 "
                  />
                  <p>{rating}</p>
                  <p>{reviewcount}</p>
                  <p>reviews</p>
                </div>
              </div>
              {/* Date Picker and Number of Guest */}
              <div className="  text-lg  mt-4">
                <div className="grid grid-cols-2 ">
                  <div className=" border-[#FFFFFF]/50 border-t-2 border-l-2 border-r-2 rounded-tl-lg p-2">
                    <label className="text-[#FFFFFF]/50">CHECK IN</label>
                    <p>11/12/13</p>
                  </div>
                  <div className="border-[#FFFFFF]/50 border-t-2 border-r-2 rounded-tr-lg p-2">
                    <label className="text-[#FFFFFF]/50">CHECK OUT</label>
                    <p>11/12/13</p>
                  </div>
                </div>
                <div className=" border-[#FFFFFF]/50 border-2 rounded-b-lg p-2">
                  <label className="text-[#FFFFFF]/50">GUESTS</label>
                  <p>{guest} guest/s</p>
                </div>
              </div>
            </div>
            <div className="text-white bg-[#00C2FF] w-full text-center font-bold rounded-b-xl text-2xl p-2">
              <button className="hover:scale-110 transition duration-500 cursor-pointer">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`ml-[10%] mt-2 text-white`}>
        <h1 className="font-bold text-3xl">
          Floating Cottage in Aquascape Lake Caliraya
        </h1>
      </div>
    </div>
  );
};

export default DetailsSection;
