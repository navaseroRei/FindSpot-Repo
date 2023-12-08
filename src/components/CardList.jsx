import React from "react";
import Card from "./Card";
import styles from "../styles";

const CardList = () => {
  return (
    <div className="container mx-auto justify-center  px-[4rem] py-4  absolute z-[2]">
      <div className= "grid grid-cols-4  pt-[1rem] ml-[3rem] justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
