import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Hero from "./Components/Hero";
import Deals from "./Components/Deals";
import Slaider from "./Components/Slaider";
import Products from "./Components/Products";
import Banner from "./Components/Banner";
import Computer from "./Components/Computer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Deals/>
      <Slaider/>
      <Products/>
      <Banner/>
      <Computer/>
    </div>
  );
};

export default App;
