import React from "react";
import "./Footer.css"; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="https://bscscan.com/address/0x57949388158dd8d2a790dbfc51cdf3caa265b64d/">
                CBC
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copy-right">© 2024 Your Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
