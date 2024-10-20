import React from "react";
import "./index.css";

const ProductModal = ({ product, onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <div className="container">
            <button className="close-modal" onClick={onClose}>
          &times;
        </button>
          <h4>Your Cart</h4>
          <hr />

          <p className="order-success">Congratulations Order Placed!</p>

          <div className="plant"></div>

          <div className="message">
            <p>Thank you for choosing Chaperone services.</p>
            <p>We will soon get in touch with you!</p>
          </div>

          <button className="btn">CONTINUE SHOPPING</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
