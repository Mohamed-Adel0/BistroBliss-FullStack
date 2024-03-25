import React from "react";
import Css from "./FastFood.module.css";
import { CiClock2 } from "react-icons/ci";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import picture1 from "../Pictures/cookMan.jpg";
import picture2 from "../Pictures/soup.jpg";
import picture3 from "../Pictures/meat.jpg";
const FastFood = () => {
  const products = [
    {
      id: 1,
      title: "Fastest Food Delivery in City",
      descraption:
        "Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. ",
      timer: "Delivery within 30 minutes",
      offer: "Best Offer & Prices",
      cart: "Online Services Available",
      clocks: <CiClock2 />,
      receit: <HiOutlineReceiptTax />,
      shopCart: <MdOutlineShoppingCart />,
      image1: picture1,
      image2: picture2,
      image3: picture3,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          {products?.map((r) => (
            <div className={Css.card} key={r.id} data-aos="fade-right">
              <div className={Css.boximgs}>
                <div className={Css.img}>
                  <img src={r.image1} alt="" />
                </div>
                <div className={Css.img}>
                  <img src={r.image2} alt="" />
                  <img src={r.image3} alt="" />
                </div>
              </div>
            </div>
          ))}
          {products?.map((r) => (
            <div className={Css.card} key={r.id}>
              <div className={Css.text}>
                <h3>{r.title}</h3>
                <p>{r.descraption}</p>
              </div>
              <div className={Css.icons}>
                <div className={Css.icon}>
                  <button>{r.clocks}</button>
                  <p>{r.timer}</p>
                </div>
                <div className={Css.icon}>
                  <button>{r.receit}</button>
                  <p>{r.offer}</p>
                </div>
                <div className={Css.icon}>
                  <button>{r.shopCart}</button>
                  <p>{r.cart}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FastFood;
