import React from "react";
import Css from "./Contact.module.css";
import TwoSeaction from "../TwoSeaction/TwoSeaction";
const Contact = () => {
  const Products = [
    {
      id: 1,
      title: "Contact Us",
      descraption:
        "We consider all the drivers of change gives you the components you need to change to create a truly happens.",
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
          <div className={Css.card}>
            <form action="">
              <div className={Css.email}>
                <div className={Css.name}>
                  <label htmlFor="name">Name</label> <br />
                  <input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className={Css.gmail}>
                  <label htmlFor="Email">Email</label> <br />
                  <input
                    type="email"
                    name=""
                    id="Email"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <label htmlFor="Subject">Subject</label>
              <input type="text" placeholder="Write a subject" id="Subject" />
              <label htmlFor="Message">Message</label>
              <textarea
                placeholder="Write your message"
                name=""
                id="Message"
                cols="30"
                rows="10"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      <TwoSeaction/>
    </div>
  );
};

export default Contact;
