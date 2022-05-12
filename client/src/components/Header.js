import React from "react";
import { Link } from "react-router-dom";

import catLogo from "../assets/cat-logo.png";

import "../css/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="link" id="logo">
          <img id="cat-logo" src={catLogo} />
        </Link>
        <div className="header-right">
          <Link to="/reservation" className="link">
            RESERVATION
          </Link>
          <Link to="/see-cats" className="link">
            MEET THE CATS
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
