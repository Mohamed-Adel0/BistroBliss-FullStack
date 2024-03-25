import React, { useState } from "react";
import "./Style/AdminPannel.scss";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const CreateProducts = () => {
  const Navigate = useNavigate();
  let token = JSON.parse(localStorage.getItem("token"));
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    token: `${token}`,
  });
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("token", formData.token);
      formDataToSend.append("image", image);
      await axios
        .post("https://apis-8gnd.onrender.com/allproducts", formDataToSend)
        .then((e) => {
          if (e.data.data == null) {
            toast.error(e.data.error);
          } else {
            toast.success(e.data.msg);
            setTimeout(() => {
              Navigate("/admin/dashbord/products")
            }, 1000);
          }
        });
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.msg);
    }
  };
  return (
    <div>
      <div className="parent-create">
        <div className="container-create">
          <form onSubmit={handleSubmit}>
            <div className="label">
              <p>Name Products</p>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="label">
              <p>How Many Sallery</p>
              <input
                type="text"
                placeholder="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="label">
              <p>Description Title</p>
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="label">
              <p>Product Image</p>
              <input
                type="file"
                placeholder="image"
                name="image"
                onChange={handleImageChange}
              />
            </div>
            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
