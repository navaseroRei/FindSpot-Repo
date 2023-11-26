import React from "react";
import { CardList, Navbar, SearchBar } from "../components";
import styles from "../styles";

const Home = () => {
  return (
    <div id="homepage" className="w-full  ">
      <div className="bg-slate-900/70 absolute top-0 left-0 w-full h-[1132px]" />
      <Navbar />
      <div className={`${styles.flexCenter}`}>
        <SearchBar />
      </div>
      <CardList />
    </div>
  );
};

export default Home;
