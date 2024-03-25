import React from "react";
import Css from "./ValuableGuest.module.css";
import cook from "../Pictures/cook.jpg";
const ValuableGuest = () => {
  const products = [
    {
      id: 1,
      title: "Locations",
      numb: "3",
    },
    {
      id: 2,
      title: "Founded",
      numb: "1995",
    },
    {
      id: 3,
      title: "Staff Members",
      numb: "65+",
    },
    {
      id: 4,
      title: "Satisfied Customers",
      numb: "100%",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <div className={Css.text}>
              <h3>A little information for our valuable guest</h3>
              <p>
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>
            <div className={Css.box}>
              {products?.map((r) => (
                <div className={Css.documentation} key={r.id} data-aos="fade-right">
                  <h3>{r.numb}</h3>
                  <p>{r.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Css.card} data-aos="fade-left">
            <img src={cook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuableGuest;
