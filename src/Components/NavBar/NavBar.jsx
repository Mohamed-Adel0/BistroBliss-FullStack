import React, { useEffect, useState } from "react";
import Css from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../Pictures/Logo.jpg";
import Information from "../Information/Information";
import { FaArrowUp, FaUser } from "react-icons/fa6";
import axios from "axios";
import { IoIosLogOut } from "react-icons/io";
const NavBar = () => {
  const [setClass, getClass] = useState(false);
  const Menu = () => {
    getClass(!setClass);
  };
  const [scroll, setScroll] = useState(false);
  const eventScroll = () => {
    if (window.scrollY > 1308) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const [DataUsers, SetDataUser] = useState();
  const [ChangeDisplay, SetChangeDisplay] = useState(false);
  const [DeleteData, SetDeleteData] = useState(true);
  useEffect(() => {
    try {
      let Clears = setInterval(() => {
        if (localStorage.getItem("id") !== null) {
          let Pid = JSON.parse(localStorage.getItem("id"));
          axios
            .get(`https://apis-8gnd.onrender.com/register/${Pid}`)
            .then((e) => SetDataUser(e.data.data.username));
          clearInterval(Clears);
          SetChangeDisplay(true);
          SetDeleteData(false);
        } else {
          SetChangeDisplay(false);
        }
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }, []);
  window.addEventListener("scroll", eventScroll);
  const RemoveData = () => {
    localStorage.removeItem("type");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    SetDeleteData(true);
    SetChangeDisplay(false);
    window.location.pathname = "/";
  };
  // window.onload = refresh;
  return (
    <div>
      <Information />
      <header>
        <nav>
          <div className={Css.img}>
            <img src={logo} alt="" />
            <h3>Bistro Bliss</h3>
          </div>
          <ul className={`${Css.hide} ${setClass ? Css.show : ""}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="pages">Pages</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
          <div className={Css.icon}>
            <Link to="booktable">Book A Table</Link>
            <Link className={ChangeDisplay ? Css.showProfile : Css.hidex} to="profile">
              <h1> {DataUsers?.split("").splice(0, 1).join(" ")}</h1>
            </Link>
            <Link to="login" className={`${Css.register} ${ ChangeDisplay ? Css.hidex : Css.showProfile}`} onClick={() => window.scrollTo(0, 100)}>
              <FaUser />
            </Link>
            <Link onClick={() => RemoveData()} className={`${Css.out} ${ DeleteData ? Css.hidex : Css.showProfile}`}>
              <IoIosLogOut />
            </Link>
          </div>
          <div className={Css.icons}>
            <div className={Css.menu}>
              <button onClick={() => Menu()}>
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className={`${Css.top} ${scroll ? Css.showScroll : ""}`}>
        <button onClick={() => window.scrollTo(0, 0)}>
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
// lama arg3 hb2a a3awz afkar fe mood3o login da yzahar awel ma ados 3alla el icon bta3 el User
