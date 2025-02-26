import React from "react";
import { Link } from "react-router-dom";
import "./RouterHelper.css";

const RouterHelper = () => {
  return (
    <div>
      <h1>My App</h1>
      <ul id="topBar">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/users"}>Users</Link>
        </div>
        <div>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div>
          <Link to={"/about"}>About</Link>
        </div>
      </ul>
    </div>
  );
};

export default RouterHelper;
