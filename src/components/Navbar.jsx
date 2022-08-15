import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

 
  

  



  return (
    <div className="header">
      <nav className="navbar">
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={200}
          className="logo"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
      </nav>
    </div>
  );
};

export default Navbar;
