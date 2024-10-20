// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./index.css";

const Header = () => {
  return (
    <div>
      <div className="mobile-number">
        <p className="shipping">Free shipping on order above 999/-</p>
        <p className="number">Call us on:+91 98768 05120</p>
      </div>
      <header className="header">
        <div className="logo-route">
          <img
            className="logo-image"
            src="https://res.cloudinary.com/dqupljwh9/image/upload/v1729335238/Group_53_ewvz4l.png"
            alt="Chaperone Logo"
          />
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/plants-and-pots"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                Plants & Pots
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tools"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                end
              >
                Tools{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                end
              >
                Our Services
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourstories"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                Ourstories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                FAQs
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <NavLink to="/profile" className="profile link">
            <p>
              <GoPerson className="header-icon" /> <br />
              My Profile
            </p>
          </NavLink>
          <Link to="/cart" className="cart link">
            <p>
              <BsCart2 className="header-icon" />
              <sup className="cart-count-badge">3</sup>
              <br />
              Cart
            </p>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
