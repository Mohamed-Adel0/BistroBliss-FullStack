import React from "react";
import Css from "./OurMenu.module.css";
import { IoIosCafe } from "react-icons/io";
import { FaBowlRice } from "react-icons/fa6";
import { BiDrink } from "react-icons/bi";
import { GiCakeSlice } from "react-icons/gi";
import { Link } from "react-router-dom";
const OurMenu = () => {
  const products = [
    {
      id: 1,
      icons: <IoIosCafe />,
      title: "BreakFast",
      des: "In the new era of technology we look in the future with certainty and pride for our life.",
      menu: "Explore Menu",
      path: "/menu/breakfast",
      right : "data-aos=`fade-right`data-aos-offset=`300`data-aos-easing=`ease-in-sine`"
    },
    {
      id: 2,
      icons: <FaBowlRice />,
      title: "Main Dishes",
      des: "In the new era of technology we look in the future with certainty and pride for our life.",
      menu: "Explore Menu",
      path: "/menu/dishes",
      right : "data-aos=`fade-right`data-aos-offset=`300`data-aos-easing=`ease-in-sine`"
    },
    {
      id: 3,
      icons: <BiDrink />,
      title: "Drinks",
      des: "In the new era of technology we look in the future with certainty and pride for our life.",
      menu: "Explore Menu",
      path: "/menu/drink",
      right : "data-aos=`fade-left`data-aos-offset=`300`data-aos-easing=`ease-in-sine`"
    },
    {
      id: 4,
      icons: <GiCakeSlice />,
      title: "Desserts",
      des: "In the new era of technology we look in the future with certainty and pride for our life.",
      menu: "Explore Menu",
      path: "/menu/dessart",
      right : `data-aos="fade-right"data-aos-offset="300"data-aos-easing="ease-in-sine"`
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <h3 className={Css.h3}>Browse Our Menu</h3>
        <div className={Css.container}>
          {products?.map((r) => (
            <div className={`${Css.card} ${r.right}`} key={r.id} data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" >
              <button>{r.icons}</button>
              <h3>{r.title}</h3>
              <p>{r.des}</p>
              <Link onClick={()=>window.scrollTo(0,200)} to={r.path}>{r.menu}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
