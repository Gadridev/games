import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchGameDevelopers } from "../api/homeApi";
import "../styles/Games.css";

function GameDevelopers() {
  const { game_id } = useParams();
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDevelopers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGameDevelopers(game_id);
        setDevelopers(data);
      } catch (err) {
        setError("Failed to fetch developers.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDevelopers();
    window.scrollTo(0, 0);
  }, [game_id]);

  if (loading) return <div className="games-route-wrapper"><div className="loading-text">LOADING DEVELOPERS...</div></div>;
  if (error) return <div className="games-route-wrapper"><div className="error-text">{error}</div></div>;

  return (
    <div className="games-route-wrapper game-detail-wrapper">
      <h1 className="games-page-title">// DEVELOPERS //</h1>

      <div className="retro-window">
        <div className="retro-window-title">developers.dat</div>
        <div className="retro-window-content">
          <ul className="developers-list">
            {developers.map((dev) => (
              <li key={dev.id} className="developer-item">{dev.name}</li>
            ))}
          </ul>

          <div className="developers-link-container">
            <Link to={`/games/${game_id}`} className="cyber-btn">
              &lt;&lt; BACK TO GAME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDevelopers;
