import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BouncingBall from "../components/widgets/BouncingBall";
import RotatingCube from "../components/widgets/RotatingCube";
import BedRooms from "./BedRooms";
import PopularDishes from "./PopularDishes";

const HomePage = () => {
  return (
    <React.Fragment>
      {/*<div>
        <RotatingCube primary="green"/>
        <RotatingCube primary="purple"/>
        <RotatingCube primary="red"/>
      </div>
      */}
       <Header />
      <PopularDishes />
      <BedRooms />
      <Footer /> 
    </React.Fragment>
  );
};

export default HomePage;
