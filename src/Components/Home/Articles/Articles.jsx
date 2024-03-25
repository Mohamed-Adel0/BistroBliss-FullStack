import React from "react";
import Css from "./Articles.module.css";
import picture1 from "../Pictures/burgar.jpg";
import picture2 from "../Pictures/botatos.jpg";
import picture3 from "../Pictures/chicken.jpg";
import picture4 from "../Pictures/cake.jpg";
import picture5 from "../Pictures/Beza.jpg";
import { Link } from "react-router-dom";
const Articles = () => {
  const product = [
    {
      id: 1,
      title:
        "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
      descraption:
        "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
      image: picture1,
      month: "January 3, 2023",
    },
  ];
  const newProducts = [
    {
      id: 1,
      month: "January 3, 2023",
      title: "How to prepare the perfect french fries in an air fryer",
      image: picture2,
    },
    {
      id: 2,
      month: "Math 3, 2023",
      title: "How to prepare delicious chicken tenders",
      image: picture3,
    },
    {
      id: 3,
      month: "Math 3, 2023",
      title: "7 delicious cheesecake recipes you can prepare",
      image: picture4,
    },
    {
      id: 4,
      month: "December 3, 2023",
      title: "5 great pizza restaurants you should visit this city",
      image: picture5,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.paragraph}>
          <h3>Our Blog & Articles</h3>
          <Link to="/pages" onClick={()=>window.scrollTo(0,0)}>Read All Articles</Link>
        </div>
        <div className={Css.container}>
          {product?.map((r) => (
            <div className={Css.card} key={r.id}>
              <div className={Css.img}>
                <img src={r.image} alt="" />
              </div>
              <div className={Css.text}>
                <p>{r.month}</p>
                <h3>{r.title}</h3>
                <p>{r.descraption}</p>
              </div>
            </div>
          ))}

          <div className={Css.card}>
            {newProducts?.map((r) => (
              <div className={Css.cards} key={r.id} data-aos="fade-left">
                <div className={Css.imgs}>
                  <img src={r.image} alt="" />
                </div>
                <div className={Css.texts}>
                  <p>{r.month}</p>
                  <h3>{r.title}</h3>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
