import React from "react";
import "./Footer.scss";
import footerLogo from "../images/footer-logo.png"; // Assurez-vous que le chemin est correct

function Footer() {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="Kasa Logo" />
      <p>© 2024 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

