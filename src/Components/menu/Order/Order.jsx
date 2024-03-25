import React from "react";
import Css from "./Order.module.css";
import Picture1 from "../Pictures/1.jpg";
import Picture2 from "../Pictures/2.jpg";
import Picture3 from "../Pictures/3.jpg";
import Picture4 from "../Pictures/4.jpg";
import Picture5 from "../Pictures/5.jpg";
import Picture6 from "../Pictures/6.jpg";
import Picture7 from "../Pictures/7.jpg";
import Picture8 from "../Pictures/8.jpg";
import Picture9 from "../Pictures/9.jpg";
const Order = () => {
  const Products = [
    {
      id: 1,
      image: Picture1,
    },
    {
      id: 2,
      image: Picture2,
    },
    {
      id: 3,
      image: Picture3,
    },
    {
      id: 4,
      image: Picture4,
    },
    {
      id: 5,
      image: Picture5,
    },
    {
      id: 6,
      image: Picture6,
    },
    {
      id: 7,
      image: Picture7,
    },
    {
      id: 8,
      image: Picture8,
    },
    {
      id: 9,
      image: Picture9,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <h3>You can order through apps</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
          <div className={Css.card}>
            {Products?.map((r) => (
              <div className={Css.box} key={r.id}>
                <img src={r.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
