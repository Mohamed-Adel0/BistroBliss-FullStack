import React, { useState } from "react";
import Css from "./Register.module.css";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [ChangeValue, SetChangeValue] = useState({
    //Hna b5azan el Value elly rag3ly mn el Input
    username: "",
    email: "",
    passowrd: "",
  });
  const Navigate = useNavigate();
  const URLRegister = async (ValueInput) => {
    //ValueInput da loop rag3ly mn functuion submit gowaha State elly shala Data
    try {
      await axios
        .post("https://apis-8gnd.onrender.com/register", ValueInput)
        .then((e) => {
          if (e.data.msg !== undefined) {
            toast.success(e.data.msg); // hna b2olo low el Data da5la sa7 tal3 alarm SuccessFully
            setTimeout(() => {
              Navigate("/login");
            }, 800);
          }
          if (e.data.error !== null) {
            toast.error(e.data.error); //da fe 7alt low el data mogoda tatl3 Error eza kan email aw Passowrd mogod
          }
        });
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const CheckEmail = /^[a-zA-Z]{3,15}[0-9]{0,4}@(hotmail|yahoo|gmail).com$/g;
    const CheckUserName = /^[A-Z][a-z]{3,10}$/;
    const CheckPassowrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (CheckUserName.test(ChangeValue.username)) {
      if (CheckEmail.test(ChangeValue.email)) {
        if (CheckPassowrd.test(ChangeValue.passowrd)) {
          URLRegister(ChangeValue); // hna ktabt ChangeValue 3shan el data rag3 mn 5lelha f b3tha Paramtar ly Axios
        } else {
          toast(
            "Password Must include at least one Lowercase letter, one Uppercase letter, one Digit, one Special Character, and be at least 6 Characters long",
            {
              duration: 5000,
            }
          );
        }
      } else {
        toast(
          "Please write it. E-mail.- Right. e-mail that contains the words yahoo or gmail or hotmail.",
          {
            duration: 5000,
          }
        );
      }
    } else {
      toast(
        "Username Must Contain Not More than 8 Characters ,Start With Characters and end with Numbers",
        {
          duration: 5000,
        }
      );
    }
  };
  const handleChange = (e) => {
    const UpdateData = { ...ChangeValue };
    UpdateData[e.target.name] = e.target.value;
    SetChangeValue({ ...UpdateData });
  };
  return (
    <div>
      <div className={Css.parent}>
        <form onSubmit={handleSubmit}>
          <div className={Css.logo}>
            <Link>
              <FaRegUserCircle />
            </Link>
          </div>
          <div className={Css.logo}>
            <h3>Create Account</h3>
          </div>
          <div className={Css.login}>
            <label htmlFor="username">
              <FaRegUser />
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="UserName"
            />
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
            <label htmlFor="password">
              <RiLockPasswordLine />
            </label>
            <input
              type="password"
              name="passowrd"
              onChange={handleChange}
              id="password"
              placeholder="Passowrd"
            />
          </div>
          <div className={Css.create}>
            <Link to="/login">Already have an account?</Link>
          </div>
          <button type="submit"> Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
