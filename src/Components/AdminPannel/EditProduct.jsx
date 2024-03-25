import React, { useEffect, useState } from "react";
import "./Style/AdminPannel.scss";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
const EditProduct = () => {
  const URL = useParams();
  const id = URL.id;
  const [formData, setFormData] = useState({});
  const Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    axios
      .get(`https://apis-8gnd.onrender.com/allproducts/${id}`)
      .then((e) => setFormData(e.data.data));
  }, [id]);
  
  const UpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title: formData.title,
        price: formData.price,
        description: formData.description,
      };
      await axios
      .patch(`https://apis-8gnd.onrender.com/allproducts/${id}`, data)
      .then((e) => {
        if (e.data.msg) {
          toast.success(e.data.msg);
          Navigate("/admin/dashbord/products");
        } else {
          toast.error(e.data.error);
        }
      });
    
    } catch (error) {
      toast.error(error.response.msg);
    }
  };

  return (
    <div>
      <div className="parent-Update">
        <div className="container-Update">
          <form onSubmit={UpdateSubmit}>
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

            <button>Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
