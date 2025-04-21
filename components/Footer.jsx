import React from "react";
import { IMG } from "../assets/img";
import Button from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section
        className="footer-top boot-container"
        style={{
          backgroundImage: `url(${IMG.FooterTopBg})`,
        }}
        
      >
        <img src={IMG.FooterTop} alt="footer-top" />
        <h1>
          Stay Connected With <br /> Cutting Edge IT
        </h1>
        <Button
          variant="secondary"
          text={"Request a Demo"}
          href={"/contact-us"}
          className="footer-request"
        />
      </section>
      <footer>
        <img src={IMG.footerlogo} alt="logo" />
        <div className="boot-container">
          <Link to={"/"}>Home</Link> <span>|</span>
          <Link to={"/terms-and-conditions"}>Terms & Condition</Link>
          <span>|</span>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
          <span>|</span>
          <Link to={"/sitemap"}>Sitemap</Link>
          <span>|</span>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
        <p>Outstrive © 2025. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
