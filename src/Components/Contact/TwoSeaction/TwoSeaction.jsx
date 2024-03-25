import React from "react";
import Css from "./TwoSeaction.module.css";
const TwoSeaction = () => {
  const Products = [
    {
      id: 1,
      title: "Call Us",
      descraption: "+201117189056",
    },
    {
      id: 2,
      title: "Hours:",
      descraption: "Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm",
    },
    {
      id: 3,
      title: "Our Location:",
      descraption: "123 Bridge Street Nowhere Land, LA 12345 United States",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          {Products?.map((r) => (
            <div className={Css.text} key={r.id}>
              <h3>{r.title}</h3>
              <p>{r.descraption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoSeaction;
