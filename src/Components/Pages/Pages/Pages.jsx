import React from "react";
import Css from "./Pages.module.css";
import Picture1 from "../Pictures/Potats.png";
import Picture2 from "../Pictures/pasta.png";
const Pages = () => {
  const Products = [
    {
      id: 1,
      title: "What do you need to prepare a home-made burger?",
      descraption: `Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.

      Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
      Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
      Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
      Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
      Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.`,
    },
    {
      id: 2,
      title: "What are the right ingredients to make it delicious?",
      descraption: `Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.

      Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
      Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
      Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
      Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
      Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.`,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <div className={Css.text}>
              <h3 className={Css.h3}>
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </h3>
            </div>
            <div className={Css.img}>
              <img src={Picture2} alt="" />
            </div>
          </div>
          <div className={Css.card}>
            {Products?.map((r) => (
              <div className={Css.text} key={r.id}>
                <h3>{r.title}</h3>
                <p>{r.descraption}</p>
              </div>
            ))}
          </div>
          <div className={Css.card}>
            <div className={Css.img}>
              <img src={Picture1} alt="" />
            </div>
            <div className={Css.text}>
              <h3>What are the right ingredients to make it delicious?</h3>
              <p>
                Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.
                Sed eget viverra egestas nisi in consequat. Fusce sodales augue
                a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit lobortis arcu enim urna adipiscing
                praesent velit viverra sit semper lorem eu cursus ve of all
                hendrerit elementum morbi curabitur etiam nibh justo, lorem
                aliquet donec sed sit mi dignissim at ante massa mattis magna
                sit amet purus gravida quis blandit turpis..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
