import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer id="footer">
      <ul>
        <div id="icon-container">
          <a href="https://twitter.com/HariTheRoy2" target="_blank">
            <div className="icon">
              <li>
                <i className="fab fa-twitter"></i>
              </li>
            </div>
          </a>
          <a href="https://www.instagram.com/hari_the_roy/" target="_blank">
            <div className="icon">
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </div>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <div className="icon">
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
            </div>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            <div className="icon">
              <li>
                <i className="far fa-envelope"></i>
              </li>
            </div>
          </a>
        </div>
      </ul>
      <p>&copy; 2023, Election</p>
    </footer>
  );
};
export default Footer;