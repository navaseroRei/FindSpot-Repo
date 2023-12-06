import React from "react";
import styles from "../styles";
import { searchIcon } from "../assets";

const SearchBar = () => {
  return (
    <div className="mt-[4rem] justify-center items-center">
      <div className="w-[60rem] h-[10.5rem] px-[2rem] backdrop-blur-md drop-shadow-md bg-gray-400/30 shadow-2xl rounded-xl">
        <form
          action=""
          className={`${styles.justifyBetween} items-center py-[2rem]`}
        >
          <div className="flex flex-col">
            <label className={`${styles.heading3} `}>Location</label>
            <input
              type="text"
              className="w-[150px] text-[16px] text-white/50 bg-transparent border-0 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-white/25 px-3 py-2 rounded-md"
              placeholder="add destination"
            />
          </div>
          <div className="flex flex-col">
            <label className={`${styles.heading3}  `}>Check in</label>
            <input
              type="text"
              className="w-[150px] text-[16px] text-white/50 bg-transparent border-0 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-white/25 px-3 py-2 rounded-md"
              placeholder="add date"
            />
          </div>
          <div className="flex flex-col">
            <label className={`${styles.heading3} `}>Check out</label>
            <input
              type="text"
              className="w-[150px] text-[16px] text-white/50 bg-transparent border-0 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-white/25 px-3 py-2 rounded-md"
              placeholder="add date"
            />
          </div>
          <div className="flex flex-col">
            <label className={`${styles.heading3} `}>People</label>
            <input
              type="text"
              className="w-[150px] text-[16px] text-white/50 bg-transparent border-0 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-white/25 px-3 py-2 rounded-md"
              placeholder="add people"
            />
          </div>

          <div className="bg-white p-[2rem] rounded-full shadow-lg hover:scale-125 transition duration-500 cursor-pointer object-contain h-30 w-30 self-center">
            <img src={searchIcon} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
