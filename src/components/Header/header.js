import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="divLogo">
        <a href="/home">
          <img src="/images/logo.png" alt="logo" className="imgLogo" />
        </a>
      </div>

      <nav>
        <Link to="/home">Home</Link>

        <Link to="/subpage1">Subpage1</Link>

        <Link to="/subpage2">Subpage2</Link>

        <Link to="/subpage3">Subpage3</Link>
      </nav>
    </header>
  );
};

export default Header;
