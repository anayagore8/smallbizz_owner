import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import SidePanel from "./SidePanel";

const Home = () => {
  const { user } = useUserAuth();

  // eslint-disable-next-line
  // The following line is for future use or debugging
  console.log(user);

  return (
    <>
      <SidePanel />
      <div className="content">
        <div className="p-4 box mt-3 text-center">
          Welcome <br />
          {user && user.email}
        </div>
        {/* Other content of your home page goes here */}
      </div>
    </>
  );
};

export default Home;
