import React from "react";
import Css from "./Customers.module.css";
import picture1 from "../Pictures/man.jpg";
import picture2 from "../Pictures/wman1.jpg";
import picture3 from "../Pictures/wman2.jpg";
const Customers = () => {
  const products = [
    {
      id: 1,
      title: "“The best restaurant”",
      descraption:
        "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      image: picture1,
      name: "Sophire Robson",
      allocated: "Los Angeles, CA",
    },
    {
      id: 2,
      title: "“Simply delicious”",
      descraption:
        "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",

      image: picture2,
      name: "Matt Cannon",
      allocated: "San Diego, CA",
    },
    {
      id: 3,
      title: "“One of a kind restaurant”",
      descraption:
        "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",

      image: picture3,
      name: "Andy Smith",
      allocated: "San Francisco, CA",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <h3 className={Css.h3}>What Our Customers Say</h3>
        <div className={Css.container}>
          {products?.map((r) => (
            <div className={Css.card} key={r.id}>
              <div className={Css.text}>
                <h3>{r.title}</h3>
                <p>{r.descraption}</p>
              </div>
              <div className={Css.info}>
                <div className={Css.img}>
                  <img src={r.image} alt="" />
                </div>
                <div className={Css.aboutus}>
                  <h3>{r.name}</h3>
                  <p>{r.allocated}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
