import React, { useState } from "react";
import Css from "./Login.module.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
const Login = () => {
  const [TakeValue, SetTakeValue] = useState({
    email: "",
    passowrd: "",
    type: "users",
  });
  const Navigate = useNavigate();
  // const [Closed, setClosed] = useState(false);
  const ValidationLogin = async (TakeValue) => {
    try {
      await axios.post("https://apis-8gnd.onrender.com/login", TakeValue).then((e) => {
        if (e.data.data == null) {
          toast.error(e.data.error);
        } else {
          toast.success(e.data.msg);
          // setClosed(true);
        }
        if (e.data.data[0].type === "Admin") {
          localStorage.setItem("token", JSON.stringify(e.data.data[0].token));
          localStorage.setItem(
            "username",
            JSON.stringify(e.data.data[0].username)
          );
          localStorage.setItem("type", JSON.stringify(e.data.data[0].type));
          Navigate("/admin/dashbord");
        } else {
          setTimeout(() => {
            window.scrollTo(0, 0);
            Navigate("/");
            localStorage.setItem("type", TakeValue.type);
            localStorage.setItem("id", JSON.stringify(e.data.data[0].id));
            localStorage.setItem("username",JSON.stringify(e.data.data[0].username)
            );
          }, 600);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const CheckEmail = /^[a-zA-Z]{3,15}[0-9]{0,4}@(hotmail|yahoo|gmail).com$/g;
    const CheckPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (CheckEmail.test(TakeValue.email)) {
      if (CheckPassword.test(TakeValue.passowrd)) {
        ValidationLogin(TakeValue);
      } else {
        toast.error("Password is not valid");
      }
    } else {
      toast.error("Email is not valid");
    }
  };
  const handleChange = (e) => {
    const Validation = { ...TakeValue };
    Validation[e.target.name] = e.target.value;
    SetTakeValue({ ...Validation });
  };
  const refresh = () => {
    localStorage.removeItem("type");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
  };
  window.onload = refresh;
  // const closeLogin = () => {
  //   if (window) {
  //     setClosed(true);
  //   } else {
  //     setClosed(false);
  //   }
  // };
  // const [Timer, setTimer] = useState(false);
  // setTimeout(() => {
  //   setTimer(true);
  // }, 1500);
  return (
    <div className={Css.bar}>
      <div className={`${Css.parent}`}>
        {/* <div className={Css.Close}>
          <button onClick={() => closeLogin()}>X</button>
        </div> */}
        <div className={Css.container}>
          <form onSubmit={handleSubmit}>
            <div className={Css.logo}>
              <Link>
                <FaRegUserCircle />
              </Link>
            </div>
            <div className={Css.logo}>
              <h3>User Login</h3>
            </div>
            <div className={Css.login}>
              <label htmlFor="email">
                <CgMail />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Address your email"
              />
            </div>
            <div className={Css.login}>
              <label htmlFor="passowrd">
                <RiLockPasswordLine />
              </label>
              <input
                type="password"
                name="passowrd"
                onChange={handleChange}
                id="passowrd"
                placeholder="Passowrd"
              />
            </div>
            <div className={Css.create}>
              <Link to="/register" onClick={()=>window.scrollTo(0,100)}>Create New Account?</Link>
            </div>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
