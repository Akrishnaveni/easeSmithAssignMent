import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./index.css";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productName } = location.state || {};

  const handleTqbtn = () => {
    navigate("/plants-and-pots");
  };
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Thank You for Viewing {productName || "the Product"}!</h1>
      <p>
        We appreciate your interest. Please explore more products from our list.
      </p>
      <button onClick={handleTqbtn}>View More Plants</button>
    </div>
  );
};

export default ThankYouPage;
