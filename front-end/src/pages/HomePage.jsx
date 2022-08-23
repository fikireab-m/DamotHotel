import React from "react";
import Header from "../components/Header";
import BedRooms from "./BedRooms";
import PopularDishes from "./PopularDishes";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <PopularDishes />
      <BedRooms />
    </React.Fragment>
  );
};

export default HomePage;
