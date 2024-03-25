import React, { useEffect, useState } from "react";
import Css from "./Dessart.module.css";
import axios from "axios";
import toast from "react-hot-toast";
const Dessart = () => {
  const [setProduct, getProduct] = useState(null);
  useEffect(() => {
    if (window !== null) {
      axios
      .get("https://apis-8gnd.onrender.com/dessert")
      .then((e) => getProduct(e.data.data))
      .catch((err) => console.log(err));
      toast("Loading data. Please wait. 😊")
    }
  }, []);
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          {setProduct?.map((r) => (
            <div className={Css.card} key={r._id} data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="10"
            data-aos-offset="0">
              <div className={Css.img}>
                <img src={`https://apis-8gnd.onrender.com/${r.image}`} alt="" />
              </div>
              <div className={Css.text}>
                <h3>
                  <span>{r.price}</span>
                </h3>
                <h3 className={Css.h3}>{r.title}</h3>
                <p>{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dessart;
