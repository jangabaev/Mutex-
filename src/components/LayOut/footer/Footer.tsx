import React from "react";
import { Link } from "react-router-dom";

import Instagram from "../../../assets/icon/instagram.png";
import Linked from "../../../assets/icon/linkedin.png";
import Github from "../../../assets/icon/github.png";
import YouTube from "../../../assets/icon/youtube.png";

import BG from "../../../assets/img/bg.jpg";

import "./footer.css";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer" style={{ backgroundImage: `url(${BG})` }}>
        <div className="container">
          <div className="footer__text">
            <p>Copyright Ⓒ 2022 Mutex Embedded Solutions </p>
          </div>
          <div className="footer__icon">
            <ul>
              <Link to="">
                <li>
                  <img src={Instagram} alt="" />
                </li>
              </Link>
              <Link to="">
                <li>
                  <img src={Linked} alt="" />
                </li>
              </Link>
              <Link to="">
                <li>
                  <img src={Github} alt="" />
                </li>
              </Link>
              <Link to="">
                <li>
                  <img src={YouTube} alt="" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
