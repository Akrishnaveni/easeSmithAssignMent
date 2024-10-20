import React from "react";
import FilterSideBar from "../FilterSideBar";
import ProductList from "../ProductList";
import { FaSearch } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaSquareThreads } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import "./index.css";
const PlantsAndPotsPage = () => {
  return (
    <div>
      <div className="search-bar">
        <div>
          <TfiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Plant"
            className="search-input"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dqupljwh9/image/upload/v1729340147/image_91_zce1di.png"
          alt="Plant Icon"
          className="plant-icon"
        />
      </div>
      <div class="tabs">
        <button class="tab active">Plants</button>
        <button class="tab">Pots</button>
      </div>

      <div class="description">
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </div>
      <div className="Nursery">
        <h3>Nursery</h3>

        <img
          src="https://res.cloudinary.com/dqupljwh9/image/upload/v1729360445/Frame_52_pbahiq.png"
          alt="nursery-image"
          className="nursery-img"
        />
      </div>
      <div className="sidebar-list-container">
        <div>
          <FilterSideBar />
        </div>
        <div>
          <ProductList />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          {/* Subscribe to our Newsletter */}
          <div className="footer-section newsletter">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p>
              Lorem ipsum dolor sit amet, aut ipsum illum et nostrum quidem aut
              necess.
            </p>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="email-input"
            />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>

          {/* About Us */}
          <div className="footer-section about-us">
            <h3>ABOUT US</h3>
            <ul>
              <li>Our Story</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Help & Support</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section services">
            <h3>OUR SERVICES</h3>
            <ul>
              <li>Book Maali</li>
              <li>Plant Day Care</li>
              <li>Rent Plants</li>
              <li>Plants & Pots</li>
              <li>Gardening Tools</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-section useful-links">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>My Account</li>
              <li>Orders & Account</li>
              <li>Track Order</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Return, Refund & Replacement Policy</li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="footer-section get-in-touch">
            <h3>GET IN TOUCH</h3>
            <p>
              F-262, First Floor, Sushant Lok Phase-III,
              <br />
              Sector-57, Gurgaon,
              <br />
              Haryana, India 122003
            </p>
            <p>Call: +91995882772</p>
            <p>Email: care@chaperoneplants.com</p>
          </div>
        </div>
        <div className="chaperon">
          <h3>CHAPERONE</h3>
          <p className="chaperon-description">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <h3>Follow us on</h3>
          <div className="footer-bottom-container">
            <div className="social-media">
              <a href="#">
                <AiOutlineInstagram className="socialmedia-icon" />
              </a>
              <a href="#">
                <RiFacebookCircleFill className="socialmedia-icon" />
              </a>
              <a href="#">
                <FaSquareThreads className="socialmedia-icon" />
              </a>
              <a href="#">
                <AiFillYoutube className="socialmedia-icon" />
              </a>
              <a href="#">
                <AiFillLinkedin className="socialmedia-icon" />
              </a>
            </div>
          </div>
          <p>© 2023, chaperone.com All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PlantsAndPotsPage;
