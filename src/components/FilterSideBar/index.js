import React, { useState } from "react";
import "./index.css";

const FilterSidebar = () => {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({});

  // Toggle section visibility
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <span>Filter</span>
        <button className="clear-btn">CLEAR ALL</button>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Type of Plants</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">
          <span>Price</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">
          <span>Nursery</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Ideal Plants Location</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Indoor/ Outdoor</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Maintanance</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Plant Size</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Water schedule</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Color</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Seasonal</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">
          <span>Light Efficient</span>
          <span className="plus">{"+"}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
