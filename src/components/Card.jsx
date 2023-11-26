import React from "react";
import { sample1, smallStar } from "../assets";
import styles from "../styles";

const Card = () => {
  return (
    <div className="w-[17.75rem] h-[20rem]  mt-[2.5rem] rounded-[20px] backdrop-blur-sm drop-shadow-md bg-white/10">
      <div className="relative">
        <img
          src={sample1}
          alt=""
          className="w-[17.75rem]-[10rem] rounded-t-[20px]"
        />
      </div>

      <div className=" flex flex-col  gap-1 px-4 py-1">
        <div className="flex justify-between">
          <h4 className={`${styles.heading4}`}>Floating Cabana</h4>
          <div className="flex gap-1">
            <img src={smallStar} alt="" />
            <p className={`${styles.heading4}`}>4.36</p>
          </div>
        </div>
        <div>
          <p className={`${styles.paragraphSmall} text-left`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vel,
            dolorem ....
          </p>
        </div>

        <div className="flex justify-between">
          <h4 className={`${styles.heading4}`}>₱12,000</h4>
          <a href="#seemore">
            <h4
              className={`${styles.flexCenter} text-white text-sm rounded-full bg-slate-900 px-3 py-1`}
            >
              See More
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
