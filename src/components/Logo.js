import React from "react";
import "./Logo.css";
import {Link} from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <h1>HS</h1>
      </Link>
    </div>
  );
}

export default Logo;
