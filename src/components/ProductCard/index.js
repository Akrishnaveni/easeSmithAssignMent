import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaStar, FaHeart } from "react-icons/fa";
import ProductModal from "../ProductModal";

import "./index.css";

const ProductCard = ({ product, onAddToCartClick }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate("/thank-you");
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <div className="heart-icon">
          <CiHeart className="heart-icon" />
        </div>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="button">
          <button className="view-btn" onClick={handleViewProduct}>
            View Product
          </button>
        </div>
      </div>
      <div className="product-details">
        <h4>{product.name}</h4>
        <p>{product.description}</p>

        <FaStar className="rating" color="gold" />
        <FaStar className="rating" color="gold" />
        <FaStar className="rating" color="gold" />
        <FaStar className="rating" color="gold" />
        <FaStar className="rating" color="gold" />
        <span> {product.rating} </span>
        <p>
          <del>₹{product.actualPrice}</del>{" "}
          <strong>₹{product.specialPrice}</strong>
        </p>
        <div className="buttons">
          <button
            className="cart-btn"
            onClick={() => onAddToCartClick(product)}
          >
            - {"  "} Add to Cart{"  "} +
          </button>
          <button className="rent-btn">Buy On Rent</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
