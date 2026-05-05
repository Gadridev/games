import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchGameById } from "../api/homeApi";
import "../styles/Games.css";

function GameDetail() {
  const { game_id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGame = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGameById(game_id);
        setGame(data);
      } catch (err) {
        setError("Failed to fetch game details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadGame();
    window.scrollTo(0, 0);
  }, [game_id]);

  if (loading) return <div className="games-route-wrapper"><div className="loading-text">LOADING DATA...</div></div>;
  if (error) return <div className="games-route-wrapper"><div className="error-text">{error}</div></div>;
  if (!game) return <div className="games-route-wrapper"><div className="error-text">GAME NOT FOUND.</div></div>;

  return (
    <div className="games-route-wrapper game-detail-wrapper">
      <div className="detail-hero">
        <img src={game.background_image || "https://via.placeholder.com/800x450?text=No+Image"} alt={game.name} />
      </div>

      <div className="retro-window">
        <div className="retro-window-title">game_info.exe</div>
        <div className="retro-window-content">
          <h1 className="detail-title">{game.name}</h1>

          <div className="detail-meta">
            <div className="meta-item">
              <span className="meta-label">RATING: </span>
              <span className="meta-value">{game.rating} / 5</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">RELEASED: </span>
              <span className="meta-value">{game.released}</span>
            </div>
            {game.metacritic && (
              <div className="meta-item">
                <span className="meta-label">METACRITIC: </span>
                <span className="meta-value">{game.metacritic}</span>
              </div>
            )}
          </div>

          <p className="detail-description">{game.description_raw}</p>

          {game.genres && game.genres.length > 0 && (
            <div className="detail-section">
              <h3 className="section-title">Genres</h3>
              <ul className="tag-list">
                {game.genres.map((genre) => (
                  <li key={genre.id} className="cyber-tag">{genre.name}</li>
                ))}
              </ul>
            </div>
          )}

          {game.platforms && game.platforms.length > 0 && (
            <div className="detail-section">
              <h3 className="section-title">Platforms</h3>
              <ul className="tag-list">
                {game.platforms.map((platform) => (
                  <li key={platform.platform.id} className="cyber-tag">{platform.platform.name}</li>
                ))}
              </ul>
            </div>
          )}

          {game.tags && game.tags.length > 0 && (
            <div className="detail-section">
              <h3 className="section-title">Tags</h3>
              <ul className="tag-list">
                {game.tags.slice(0, 15).map((tag) => (
                  <li key={tag.id} className="cyber-tag">{tag.name}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="developers-link-container">
            <Link to={`/games/${game.id}/developers-team`} className="cyber-btn">
              View Developers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
