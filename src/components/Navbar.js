import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <ul className="navList">
        <li className="navEntry">
          <Link to="/home" className="navLink">
            Home
          </Link>
        </li>
        <li className="navEntry">
          <Link to="/recipes" className="navLink">
            Recipes
          </Link>
        </li>
        <li className="navEntry">
          <Link to="/nutritions" className="navLink">
            Nutritions
          </Link>
        </li>
        <li className="navEntry">
          <Link to="/create" className="navLink">
            Add a New Recipe
          </Link>
        </li>
        <li className="navEntry">
          <Link to="/contact" className="navLink">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
