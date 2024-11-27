import React from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const NavBar = () => {
  window.addEventListener("scroll", function () {
    let navBar = document.getElementById("navBar");
    if (window.scrollY > 100) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  });

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="navBar" id="navBar">
      <div className="logo">
        <p onClick={handleNavigate}>Evoke Studio</p>
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/portrait"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Portrait
        </NavLink>
        <NavLink
          to="/weddings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Weddings
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Product
        </NavLink>
      </div>
      <div className="social-media">
        <a
          href="https://www.facebook.com/profile.php?id=100064275182134"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a href="" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="" target="_blank">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
