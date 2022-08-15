import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              delay={200}
            >
              집
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              delay={200}
            >
              어바웃
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Testimonials"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1500}
              delay={200}
            >
              고객 평가
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Demo"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              delay={200}
              href="/"
            >
              데모
            </Link>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2022 Execute, Inc. All rights reserved</p>
          <p>Website were created by Sirojiddin Kamoljonov</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
