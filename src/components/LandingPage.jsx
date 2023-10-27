import React from "react";
import bgImage from "../assets/image/LandingPageImage.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="top-0 w-full h-screen object-cover"
          src={bgImage}
          alt="findSpotBackground"
        />
        <div className="bg-sky-950/30 absolute top-0 left-0 w-full h-screen" />
      </div>
    </>
  );
};

export default LandingPage;
