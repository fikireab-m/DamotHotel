import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BedRooms from "./BedRooms";
import PopularDishes from "./PopularDishes";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <PopularDishes />
      <BedRooms />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
