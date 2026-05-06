

import { useNavigate } from "react-router-dom";

function GameCard({ game }) {
  const navigate = useNavigate();
  return (
    <div className="game-card" onClick={() => navigate(`/games/${game.id}`)}>
      <img src={game.background_image} alt={game.name} />

      <div className="rating">{game.rating}</div>

      <div className="game-info">
        <h3>{game.name}</h3>
        <span>{game.released}</span>
      </div>
    </div>
  );
}

export default GameCard;