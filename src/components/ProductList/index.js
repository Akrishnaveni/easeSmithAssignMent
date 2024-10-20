import React, { useState } from "react";
import ProductCard from "../ProductCard";
import Pagination from "../Pagination";
import ProductModal from "../ProductModal";
import { IoIosArrowDown } from "react-icons/io";
import "./index.css";

const products = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365359/e1ce63ff429a0c018fd6e2e5dd614458_oet8ty.png", // Replace with actual image URLs
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",
    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365317/7973d62829a030074ad8b6ad34_ezlwv5.png",
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",
    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365160/daa994fdb511faa82ea79a5ef58fbb1a_uezbzj.png",
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",

    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365359/e1ce63ff429a0c018fd6e2e5dd614458_oet8ty.png", // Replace with actual image URLs
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",
    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365317/7973d62829a030074ad8b6ad34_ezlwv5.png",
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",
    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365160/daa994fdb511faa82ea79a5ef58fbb1a_uezbzj.png",
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",

    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365359/e1ce63ff429a0c018fd6e2e5dd614458_oet8ty.png", // Replace with actual image URLs
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",
    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365317/7973d62829a030074ad8b6ad34_ezlwv5.png",
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",
    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365160/daa994fdb511faa82ea79a5ef58fbb1a_uezbzj.png",
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",

    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365359/e1ce63ff429a0c018fd6e2e5dd614458_oet8ty.png", // Replace with actual image URLs
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",
    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365317/7973d62829a030074ad8b6ad34_ezlwv5.png",
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",
    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dqupljwh9/image/upload/v1729365160/daa994fdb511faa82ea79a5ef58fbb1a_uezbzj.png",
    name: "Monstera",
    description: "Indoor plant (Low maintenance)",

    rating: 4.9,
    actualPrice: 350,
    specialPrice: 299,
  },
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product); // Set the clicked product in state
  };

  const handleCloseModal = () => {
    setSelectedProduct(null); // Close the modal
  };

  const handleConfirmAddToCart = () => {
    console.log(`${selectedProduct.name} added to cart`);
    setSelectedProduct(null); // Close the modal after confirming
    // You can also add cart logic here, such as updating a global state
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product-list">
      <div className="sort-container">
        <span>300 products</span>
        <button className="sort">
          Sort By <IoIosArrowDown />
        </button>
      </div>

      <div className="product-grid">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCartClick={handleAddToCartClick} // Pass function to open modal
          />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
      <div>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
            onConfirm={handleConfirmAddToCart}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
