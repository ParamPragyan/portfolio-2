import React from "react";
import "./ContactBar.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

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
         <LinkedInIcon />
        </a>
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <GitHubIcon />
        </a>
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <TwitterIcon />
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