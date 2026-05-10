import { useNavigate } from "react-router-dom";

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <div
      className="game-card group"
      onClick={() => navigate(`/games/${game.id}`)}
    >
      <img src={game.background_image} alt={game.name} />

      <div className="rating">{game.rating}</div>

      <div className="overlay">
        <div className="game-info">
          <h3>{game.name}</h3>
          <span>{game.released}</span>
        </div>

        <div className="actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/games/${game.id}`);
            }}
          >
            View Game
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/games/${game.id}/team`);
            }}
          >
            Team
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;