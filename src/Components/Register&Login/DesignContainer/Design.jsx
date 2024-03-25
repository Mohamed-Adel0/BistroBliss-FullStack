import React from "react";
import Css from "./Design.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
const Design = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <div className={Css.choose}>
              <button>
                <FaRegUserCircle />
              </button>
              <ul className="login">
                <li>
                  <NavLink to="/register">SIGN IN</NavLink>
                </li>
                <li>
                  <NavLink to="signup">SIGN UP</NavLink>
                </li>
              </ul>
            </div>
            <div className={Css.login}>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
