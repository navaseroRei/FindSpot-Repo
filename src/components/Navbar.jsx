import React from "react";
import {
  logo,
  messageIcon,
  settingsIcon,
  tripIcon,
  wishlistIcon,
} from "../assets";
import styles from "../styles";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
