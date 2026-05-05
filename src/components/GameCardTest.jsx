import { Link } from "react-router-dom";
import "../styles/Games.css";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img 
        src={game.background_image || "https://via.placeholder.com/400x225?text=No+Image"} 
        alt={game.name} 
        className="game-card-image" 
      />
      <div className="game-card-content">
        <h3>{game.name}</h3>
        <p className="game-rating">RATING: {game.rating} / 5</p>
        <p className="game-release">RELEASED: {game.released}</p>
        <Link to={`/games/${game.id}`} className="cyber-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
