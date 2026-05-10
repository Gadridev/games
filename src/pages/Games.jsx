import { useState, useEffect } from "react";
import GamesFilter from "../components/GamesFilter";
import GameCard from "../components/GameAffichage";
import Loader from "../components/Loader";
import "../styles/GameListe.css";
import { fetchGames } from "../api/homeApi";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      try {
        const data = await fetchGames(currentPage, 20, "-added", search, category);
        setGames(data.results);
        setTotalPages(Math.ceil(data.count / 20));
      } catch (err) {
        console.error("Failed to fetch games:", err);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [currentPage, category, search]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);
    range.push(1);
    if (left > 2) range.push("...");
    for (let i = left; i <= right; i++) range.push(i);
    if (right < totalPages - 1) range.push("...");
    if (totalPages > 1) range.push(totalPages);
    return range;
  };

  if (loading) return <Loader text="LOADING GAMES" />;

  return (
    <div className="games-page">
      <div className="page-header">
        <h1>EXPLORE <span>ALL GAMES</span></h1>
      </div>
      <div className="flex-filter">
        <GamesFilter setCategory={handleCategoryChange} activeCategory={category} />
        <div style={{ position: "relative" }}>
          <input className="srch" placeholder="SEARCH..." value={search} onChange={handleSearch} />
          <svg
            style={{
              position: "absolute",
              left: "10px",
              top: "23%",
              transform: "translateY(-50%)",
              color: "var(--fog)"
            }}
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="games-container">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>


      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >←</button>

        {getPageNumbers().map((page, i) =>
          page === "..." ? (
            <span key={`e-${i}`} className="page-btn" style={{ opacity: 0.4 }}>…</span>
          ) : (
            <button
              key={page}
              className={`page-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >{page}</button>
          )
        )}

        <button
          className="page-btn"
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >→</button>
      </div>
    </div>
  );
}

export default Games;