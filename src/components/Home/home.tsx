import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Link to={"/signup"}>Signup</Link><br />
      <Link to={"/login"}>Login</Link>
    </>
  );
};

export default Home;
