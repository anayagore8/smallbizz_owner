import React from "react";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router";
// import { useUserAuth } from "../context/UserAuthContext";
import Side from "./Side";

// Import Dashboard component

function Home(){
//   const { logOut, user } = useUserAuth();
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

  return (
    <>
      <Side></Side>
    </>
  );
};

export default Home;
