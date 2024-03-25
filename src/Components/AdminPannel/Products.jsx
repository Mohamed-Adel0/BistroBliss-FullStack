import React, { useEffect, useState } from "react";
import "./Style/AdminPannel.scss";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [setProduct, getProduct] = useState(null);
  const [isLoadingData, setisLoadingData] = useState(false);
  const [getStorage, setStorage] = useState();
  let alarm = JSON.parse(localStorage.getItem("type"));
  const handleDelete = async (id) => {
    try {
     if (alarm === "Admin") {
      setisLoadingData(true);
      await axios.delete(`https://apis-8gnd.onrender.com/allproducts/${id}`).then((e)=>toast.success(e.data.msg));
      setisLoadingData(false);
     }else{
      toast.error("Please Login As Admin")
     }
    } catch (err) {
      toast.error(err.response.error);
    }
  };
  const erro = ()=>{
    if (alarm !== "Admin") {
      toast.error("Please Login As Admin")
    }
  }
  useEffect(() => {
    axios
      .get("https://apis-8gnd.onrender.com/allproducts")
      .then((e) => getProduct(e.data.data))
      .catch((err) => console.log(err));
      setStorage(alarm)
  }, [isLoadingData]);
  return (
    <div>
      <div className="parent-products">
        <div className="container-products">
          <div className="detalis">
            <div className="card">
              <h4>Image</h4>
            </div>
            <div className="card">
              <h4>Title</h4>
            </div>
            <div className="card">
              <h4>Description</h4>
            </div>
            <div className="card">
              <h4>Price</h4>
            </div>
            <div className="card">
              <h4>Delete</h4>
            </div>
            <div className="card">
              <h4>Update</h4>
            </div>
          </div>
          {/* New Line */}
          {isLoadingData ? (
            <div className="alarm">
              <div className="loader">
                Loading...!
                <span></span>
              </div>
            </div>
          ) : (
            setProduct?.map((e, index) => (
              <div className="detalis" key={index}>
                <div className="card">
                  <img
                    src={`https://apis-8gnd.onrender.com/${e.image}`}
                    alt=""
                  />
                </div>
                <div className="card">
                  <p>{e.title.split(" ").splice(0, 2).join(" ")}</p>
                </div>
                <div className="card">
                  <p>{e.description.split(" ").splice(0, 3).join(" ")}</p>
                </div>
                <div className="card">
                  <p>{e.price}</p>
                </div>
                <div className="card">
                  <button onClick={() => handleDelete(e._id)}>Delete</button>
                </div>
                <div className="card">
                  <Link onClick={()=>erro()} to={getStorage ? `/admin/dashbord/products/${e._id}/edit` : `` } className="edit">Edit</Link> 
                </div> 
              </div>
            ))
          )}
          <>
          {/* {isLoadingData
            ? ""
            : setBreakfast?.map((e, index) => (
                <div className="detalis" key={index}>
                  <div className="card">
                    <img src={`https://apis-8gnd.onrender.com/${e.image}`}alt=""/>
                  </div>
                  <div className="card">
                    <p>{e.title.split(" ").splice(0, 2).join(" ")}</p>
                  </div>
                  <div className="card">
                    <p>{e.description.split(" ").splice(0, 3).join(" ")}</p>
                  </div>
                  <div className="card">
                    <p>{e.price}</p>
                  </div>
                  <div className="card">
                    <button onClick={() => handleDelete(e._id)}>Delete</button>
                  </div>
                  <div className="card">
                    <button className="edit">Edit</button>
                  </div>
                </div>
              ))}
          {isLoadingData
            ? ""
            : setDrink?.map((e, index) => (
                <div className="detalis" key={index}>
                  <div className="card">
                    <img
                      src={`https://apis-8gnd.onrender.com/${e.image}`}
                      alt=""
                    />
                  </div>
                  <div className="card">
                    <p>{e.title.split(" ").splice(0, 2).join(" ")}</p>
                  </div>
                  <div className="card">
                    <p>{e.description.split(" ").splice(0, 3).join(" ")}</p>
                  </div>
                  <div className="card">
                    <p>{e.price}</p>
                  </div>
                  <div className="card">
                    <button onClick={() => handleDelete(e._id)}>Delete</button>
                  </div>
                  <div className="card">
                    <button className="edit">Edit</button>
                  </div>
                </div>
              ))}
          {isLoadingData
            ? ""
            : setDishes?.map((e, index) => (
                <div className="detalis" key={index}>
                  <div className="card">
                    <img
                      src={`https://apis-8gnd.onrender.com/${e.image}`}
                      alt=""
                    />
                  </div>
                  <div className="card">
                    <p>{e.title.split(" ").splice(0, 2).join(" ")}</p>
                  </div>
                  <div className="card">
                    <p>{e.description.split(" ").splice(0, 3).join(" ")}</p>
                  </div>
                  <div className="card">
                    <p>{e.price}</p>
                  </div>
                  <div className="card">
                    <button onClick={() => handleDelete(e._id)}>Delete</button>
                  </div>
                  <div className="card">
                    <button className="edit">Edit</button>
                  </div>
                </div>
              ))}
          {isLoadingData
            ? ""
            : setDessart?.map((e, index) => (
                <div className="detalis" key={index}>
                  <div className="card">
                    <img
                      src={`https://apis-8gnd.onrender.com/${e.image}`}
                      alt=""
                    />
                  </div>
                  <div className="card">
                    <p>{e.title.split(" ").splice(0, 2).join(" ")}</p>
                  </div>
                  <div className="card">
                    <p>{e.description.split(" ").splice(0, 3).join(" ")}</p>
                  </div>
                  <div className="card">
                    <p>{e.price}</p>
                  </div>
                  <div className="card">
                    <button onClick={() => handleDelete(e._id)}>Delete</button>
                  </div>
                  <div className="card">
                    <button className="edit">Edit</button>
                  </div>
                </div>
              ))} */}
          </>
        </div>
      </div>
    </div>
  );
};

export default Products;


// bokra hb2a akmal modo3 el alarm da 3shan mynf3sh aseb edit we delete ly ay 7aga lazman a3mlhom ly el admin