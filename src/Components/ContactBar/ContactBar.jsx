import React from "react";
import "./ContactBar.css";
import constant from "../../constant.json"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"



const ContactBar = () => {
  return (
    <div className="contact_bar_wrapper">
      <div className="contact_bar">
        
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <img src={linkedin} alt="" />
        </a>
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <img src={github} alt="" />
        </a>
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <div className="contact_bar_line"></div>
      </div>
      <div className="contact_bar">
        <a href="mailto:parampragyan@gmail.com" className="contact_bar_email">
          parampragyan@gmail.com
        </a>
        <div className="contact_bar_line"></div>
      </div>
    </div>
  );
};

export default ContactBar;