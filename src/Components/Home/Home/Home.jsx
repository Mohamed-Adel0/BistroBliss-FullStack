import React from "react";
import Css from "./Home.module.css";
import OurMenu from "../OurMenu/OurMenu";
import HealthyFood from "../HealthyFood/HealthyFood";
import Events from "../Events/Events";
import FastFood from "../FastFood/FastFood";
import Customers from "../Customers/Customers";
import Articles from "../Articles/Articles";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <h3>
              Best food for <br /> your taste
            </h3>
            <p>
              Discover delectable cuisine and unforgettable moments <br />
              in our welcoming, culinary haven
            </p>
            <div className={Css.info}>
              <Link to="booktable">Book A Table</Link>
              <Link to="/menu">Explore Menu</Link>
            </div>
          </div>
          <div className={Css.img}>
            <img src="../Pictures/Pizza.png" alt="" />
          </div>
        </div>
      </div>
      <OurMenu />
      <HealthyFood />
      <Events />
      <FastFood />
      <Customers />
      <Articles />
    </div>
  );
};

export default Home;
