import React from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import HomeBanner2 from "../HomeBanner2/HomeBanner2";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Gallary from "./../Gallary/Gallary";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products />
      <HomeBanner2 />
      <Gallary></Gallary>
      <Reviews />
      <Blog/>
    </div>
  );
};

export default Home;
