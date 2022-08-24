import React from "react";
import Header from "../components/Header";
import ScrolAnimation from "../excercises/LayoutScroll";
import BedRooms from "./BedRooms";
import PopularDishes from "./PopularDishes";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <PopularDishes />
      <BedRooms />
      {/* <ScrolAnimation /> */}
    </React.Fragment>
  );
};

export default HomePage;
