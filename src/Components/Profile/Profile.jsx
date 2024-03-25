import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
const Profile = () => {
  let random = Math.floor(Math.random() * 360) + 1;
  const [DataUsers, SetDataUser] = useState();
  useEffect(() => {
    try {
      if (localStorage.getItem("id") !== null) {
        let Pid = JSON.parse(localStorage.getItem("id"));
        axios
          .get(`https://apis-8gnd.onrender.com/register/${Pid}`)
          .then((e) => {
            SetDataUser(e.data.data);
            toast(`Welcome ${e.data.data.username} Data Is Loading Now...!`);
          });
      } else {
        toast.error("You Must login to See Your Profile");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <div className="parent-profile">
        <div className="container-profile">
          {DataUsers && (
            <div className="card-profile">
              <h1
                className="username"
                style={{ backgroundColor: `hsl(${random}, 70%, 54%)` }}
              >
                {DataUsers?.username.split("").splice(0, 1).join(" ")}
              </h1>
              <h3>{DataUsers?.username}</h3>
              <h3 className="email">{DataUsers?.email}</h3>
              <p className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi esse aliquid doloribus ipsam architec?
              </p>
              <p>Social Media</p>
              <div className="icons">
                <Link
                  style={{ backgroundColor: `hsl(${random}, 70%, 54%)` }}
                  target="_blank"
                  to="https://www.facebook.com/profile.php?id=100012706116123"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  style={{ backgroundColor: `hsl(${random}, 70%, 54%)` }}
                  target="_blank"
                  to="https://github.com/Mohamed-Adel0"
                >
                  <FaGithub />
                </Link>
                <Link
                  style={{ backgroundColor: `hsl(${random}, 70%, 54%)` }}
                  target="_blank"
                  to="https://www.linkedin.com/in/mohamed-adel-226611286/"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                style={{ backgroundColor: `hsl(${random}, 70%, 54%)` }}
                to="/"
                className="home"
              >
                Back To Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
