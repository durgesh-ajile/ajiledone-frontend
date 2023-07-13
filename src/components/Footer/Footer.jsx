import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaPhone } from 'react-icons/fa';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { MdMail } from 'react-icons/md';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Us</Typography>
        <Typography>
        Our aim is to deliver innovative and reliable solutions and services to meet our client's needs with the utmost quality and unwavering ethics. <b> AJILEDONE</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://api.whatsapp.com/send?phone=919315473097" target="black">
        <FaPhone />
        </a>
        <a href="http://ajileminds.ajiledone.com/" target="black">
        <HiOutlineGlobeAlt />
        </a>
        <a href="mailto:info@ajiledone.com" target="black">
        <MdMail />
        </a>
        <a href="https://www.linkedin.com/company/ajiledone-technologies-private-limited/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
