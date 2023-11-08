import React from "react";
import HomePage from "./HomePage.jsx/HomePage";
import ExplorOffer from "./components/Offers/ExplorOffer";
import IndustrySection from "./components/IndustrySection/IndustrySection";
import MainImagesComponent from "./components/technologies/MainImagesComponent"
import Slider  from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <>
      <HomePage />
      <Slider />
      <ExplorOffer />
      <IndustrySection />
      <MainImagesComponent />
      <Footer />

    </>
  );
};

export default App;
