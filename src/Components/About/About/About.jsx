import React from "react";
import Css from "./About.module.css";
import picture from "../Pictures/mix.jpg";
import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import ValuableGuest from "../ValuableGuest/ValuableGuest";
import Authentic from "../Authentic/Authentic";
import Customers from "../../Home/Customers/Customers";
const About = () => {
  const products = [
    {
      id: 1,
      title: "Come and visit us",
      callPhone: "(414) 857 - 0107",
      location: <CiLocationOn />,
      mail: <CiMail />,
      call: <IoCallOutline />,
      icon: "",
      mesg: "",
      gmail: "happytummy@restaurant.com",
      gps: "",
      infogps: "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles",
      image: picture,
    },
  ];
  const newProduct = [
    {
      id: 2,
      title: "We provide healthy food for your family.",
      des: "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.",
      about:
        "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
      action: "More About Us",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          {products?.map((r) => (
            <div className={Css.card} key={r.id}>
              <div className={Css.img}>
                <img src={r.image} alt="" />
                <div className={Css.bg}>
                  <h3>{r.title}</h3>
                  <div className={Css.text}>
                    <button>{r.call}</button>
                    <p>{r.callPhone}</p>
                  </div>
                  <div className={Css.text}>
                    <button>{r.mail}</button>
                    <p>{r.gmail}</p>
                  </div>
                  <div className={Css.text}>
                    <button>{r.location}</button>
                    <p>{r.infogps}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {newProduct?.map((r) => (
            <div className={Css.card} key={r.id} data-aos="fade-left">
              <h2>{r.title}</h2>
              <p>{r.des}</p>
              <p className={Css.p}>{r.about}</p>
              <Link to="">{r.action}</Link>
            </div>
          ))}
        </div>
      </div>
      <Authentic />
      <ValuableGuest />
      <Customers />
    </div>
  );
};

export default About;
