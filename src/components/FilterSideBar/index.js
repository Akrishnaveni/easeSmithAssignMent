import React, { useState } from "react";
import "./index.css";

const FilterSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Filter</span>
          <span className="clear-btn">CLEAR ALL</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Types of Plants</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Price</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Nursery</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Ideal Plants Location</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Indoor/ Outdoor</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Maintanance</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Plant Size</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn"> Water schedule</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Color</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Seasonal</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span className="clear-btn">Light Efficient</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
