import React from "react";
import ImageSlider from "../components/ImageSlider";
import LastComments from "../components/LastComments";
import LastReleased from "./../components/LastReleased";

const Home = () => {
  return (
    <div>
      <h1>Welcome 🏡</h1>

      <div className="carousel">
        <ImageSlider />
        <LastReleased />
        <LastComments />
      </div>
    </div>
  );
};

export default Home;
