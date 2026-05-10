function GamesFilter({ setCategory, activeCategory }) {
  const categories = [
    { label: "ALL",       value: "all" },
    { label: "ACTION",    value: "action" },
    { label: "RPG",       value: "role-playing-games-rpg" },
    { label: "SHOOTER",   value: "shooter" },
    { label: "ADVENTURE", value: "adventure" },
    { label: "INDIE",     value: "indie" },
  ];

  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setCategory(cat.value)}
          className={`filter-btn ${activeCategory === cat.value ? "active" : ""}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default GamesFilter;