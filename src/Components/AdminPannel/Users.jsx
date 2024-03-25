import React, { useEffect, useState } from "react";
import "./Style/AdminPannel.scss";
import axios from "axios";
import toast from "react-hot-toast";
const Users = () => {
  const [setApi, getApi] = useState(null);
  const [isLoadingData, setisLoadingData] = useState(false);
  const handleDelete = async (id) => {
    let alarm = JSON.parse(localStorage.getItem("type"));
    try {
     if (alarm === "Admin") {
      setisLoadingData(true);
      await axios.delete(`https://apis-8gnd.onrender.com/booktable/${id}`).then((e)=>toast.success(e.data.msg));
      setisLoadingData(false);
     }else{
      toast.error("Please Login As Admin")
     }
    } catch (err) {
      toast.error(err.response.error);
    }
  };
  useEffect(() => {
    axios
      .get("https://apis-8gnd.onrender.com/booktable")
      .then((e) => getApi(e.data.data))
      .catch((err) => console.log(err));
  }, [isLoadingData]);
  //   const numb = setApi?.filter((e) => e.length);

  return (
    <div>
      <div className="parent-users">
        <div className="container-users">
          {/* <div className="text">
            <h3>Users</h3>
          </div> */}
          <div className="detalis">
            <div className="card">
              <h4>UserName</h4>
            </div>
            <div className="card">
              <h4>Total</h4>
            </div>
            <div className="card">
              <h4>Phone</h4>
            </div>
            <div className="card">
              <h4>Date</h4>
            </div>
            <div className="card">
              <h4>Time</h4>
            </div>
            <div className="card">
              <h4>Delete</h4>
            </div>
          </div>
          {isLoadingData ? (
            <div className="alarm">
              <div className="loader">
                Loading...!
                <span></span>
              </div>
            </div>
          ) :(setApi?.map((e, index) => (
            <div className="detalis" key={e._id}>
              <div className="card">
                <p>{e.username}</p>
              </div>
              <div className="card">
                <p>{e.total}</p>
              </div>
              <div className="card">
                <p>{e.phone}</p>
              </div>
              <div className="card">
                <p>{e.date}</p>
              </div>
              <div className="card">
                <p>{e.time}</p>
              </div>
              <div className="card">
                <button onClick={()=>handleDelete(e._id)} >Delete</button>
              </div>
            </div>
          )))}
        </div>
      </div>
    </div>
  );
};

export default Users;
