import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase"; // Import db from '../firebase'
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 to generate unique IDs

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const { signUp, logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.data.email);
    setError("");
    try {
      // Sign up the user with additional fields
      await signUp(email, password);
      
      // Generate a unique shop ID using uuidv4
      const shopId = uuidv4();
      
      // Store user data in Firebase Firestore along with the generated shop ID
      await db.collection("shops").doc(shopId).set({
        email,
        name,
        address,
        mobile,
        category,
        // Add more fields as needed
      });
      
      // Log in the user after successful sign-up
      await logIn(email, password);
      
      // Redirect to the desired location after successful login
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase/ React Auth Signup</h2>
        
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Control
              type="text"
              placeholder="Mobile Number"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="Retail">Retail</option>
              <option value="Food and Beverage">Food and Beverage</option>
              <option value="Services">Services</option>
              {/* Add other categories here */}
            </Form.Control>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
