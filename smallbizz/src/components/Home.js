// Home.js
import React, { useState, useEffect } from "react";
import Side from "./Side";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", image: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Replace userId with the actual user ID of the logged-in user
      const userId = "replace_with_actual_user_id";
      const response = await axios.get(`http://localhost:8000/users/${userId}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace userId with the actual user ID of the logged-in user
      const userId = "replace_with_actual_user_id";
      await axios.post(`http://localhost:8000/users/${userId}/products`, formData);
      setFormData({ name: "", description: "", image: "" });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Side />
      <div>
        <h1>My Products</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleInputChange} />
          <input type="text" name="description" placeholder="Product Description" value={formData.description} onChange={handleInputChange} />
          <input type="text" name="image" placeholder="Product Image URL" value={formData.image} onChange={handleInputChange} />
          <button type="submit">Add Product</button>
        </form>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
