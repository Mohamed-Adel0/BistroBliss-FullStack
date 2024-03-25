import React from "react";
import Css from "./Authentic.module.css";
import Picutre1 from "../Pictures/BG.jpg";
import icon from "../Pictures/Icon.jpg";
import timer from "../Pictures/timer 1.jpg";
import restaurant from "../Pictures/restaurant-menu 1.jpg";
const Authentic = () => {
  const products = [
    {
      id: 1,
      image: icon,
      title: "Multi Cuisine",
      descraption:
        "In the new era of technology we look in the future with certainty life.",
    },
    {
      id: 2,
      image: timer,
      title: "Easy To Order",
      descraption:
        "In the new era of technology we look in the future with certainty life.",
    },
    {
      id: 3,
      image: restaurant,
      title: "Fast Delivery",
      descraption:
        "In the new era of technology we look in the future with certainty life.",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <div className={Css.img}>
              <img src={Picutre1} alt="" />
              <div className={Css.bg}>
                <button className={Css.button}>
                  <svg
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width="26px"
                  >
                    <path
                      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <h3>Feel the authentic & original taste from us</h3>
              </div>
            </div>
          </div>
          <div className={Css.card}>
            {products?.map((r) => (
              <div className={Css.box} key={r.id}>
                <div className={Css.img}>
                  <img src={r.image} alt="" />
                </div>
                <div className={Css.text}>
                  <h3>{r.title}</h3>
                  <p>{r.descraption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentic;
