import React from "react";
import "./Footer.css";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Like what you see?</h1>
      <p>Then give us a call and we'll chat through what you need</p>
      <p>+963986140818</p>
      <p>evokestudio99@gmail.com</p>
      <h2>Follow us:</h2>
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

export default Footer;
