import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import HeroBanner from "../components/HeroBanner";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner/>
      <CategoryMenu />
      <FoodItems />
      <Cart />  
    </>
  );
};

export default Home;
