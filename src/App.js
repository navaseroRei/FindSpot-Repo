
import { useState } from "react";
import Home from "./screens/Home";
import LandingPage from "./screens/LandingPage";
import {MyContextProvider } from "./common/context/myContext";
import ModalManager from "./components/ModalManager";
import DetailsSection from "./components/DetailsSection";

function App() {
 

  return (
    <MyContextProvider >
      {/* <ModalManager/>
      <LandingPage /> */}
      {/* <Home/> */}
      <DetailsSection/>
    
    </MyContextProvider>
  );
}

export default App;
