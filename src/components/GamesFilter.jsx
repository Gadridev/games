import React from "react";

function GamesFilter({ setCategory, activeCategory }) {
  const categories = ["all", "Action", "RPG", "Shooter", "Adventure", "Indie"];

  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
        >
          {cat === "all" ? "ALL" : cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default GamesFilter;