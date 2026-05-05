import { useState, useEffect } from "react";
import { fetchGames, fetchGenres } from "../api/homeApi";
import GameCard from "../components/GameCard";
import "../styles/Games.css";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);

  const pageSize = 12;

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchGenres();
        setGenres(data);
      } catch (err) {
        console.error("Failed to fetch genres:", err);
      }
    };
    loadGenres();
  }, []);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGames(page, pageSize, "-rating", search, selectedGenre);
        setGames(data.results);
        setTotalPages(Math.ceil(data.count / pageSize));
      } catch (err) {
        setError("Failed to fetch games. Please check your connection or API key.");
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
    window.scrollTo(0, 0);
  }, [page, search, selectedGenre]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  if (loading) return <div className="games-route-wrapper"><div className="loading-text">LOADING GAMES...</div></div>;
  if (error) return <div className="games-route-wrapper"><div className="error-text">{error}</div></div>;

  return (
    <div className="games-route-wrapper">
      <h1 className="games-page-title">// ALL GAMES //</h1>

      <div className="retro-window">
        <div className="retro-window-title">search.exe</div>
        <div className="retro-window-content">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter game name..."
              className="cyber-input"
            />
            <button type="submit" className="cyber-btn">Search</button>
          </form>

          <div className="filter-container">
            <span className="filter-label">Genre Filter:</span>
            <select value={selectedGenre} onChange={(e) => { setSelectedGenre(e.target.value); setPage(1); }} className="cyber-select">
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="retro-window">
        <div className="retro-window-content">
          <div className="pagination-container">
            <button onClick={handlePrev} disabled={page === 1} className="cyber-btn">
              &lt;&lt; PREV
            </button>
            <span className="page-info">
              PAGE {page} / {totalPages}
            </span>
            <button onClick={handleNext} disabled={page === totalPages} className="cyber-btn">
              NEXT &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
