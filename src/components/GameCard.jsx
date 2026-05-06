import { useNavigate } from "react-router-dom";
import "../styles/trendingStyle.css"

function GameCard({ game, index }) {
    const navigate=useNavigate()
  const isFeatured = index === 0;
  const rank = String(index + 1).padStart(2, "0");
  
  const tags = game.tags
    ? game.tags.slice(0, 3).map((t) => t.name.toUpperCase())
    : [];

  const genre = game.genres?.[0]?.name || "Game";

  console.log(isFeatured,game.genres[0])
  return (
    <div className={`game-card ${isFeatured ? "game-card--featured" : ""}`} onClick={() => navigate(`/games/${game.id}`)}> 
      <img
        src={game.background_image || "https://via.placeholder.com/400x300"}
        alt={game.name}
      />

      <div className="game-card__overlay" />

    
      <div className="game-card__badges">
        {isFeatured && (
          <span className="game-card__editor">EDITOR'S PICK</span>
        )}
        <span className="game-card__score">{game.rating?.toFixed(1)}</span>
      </div>
      <div className="game-card__content">
        <span className="game-card__rank">
          #{rank} · {genre}
        </span>
        <h3 className="game-card__title">{game.name}</h3>

        {isFeatured && tags.length > 0 && (
          <div className="game-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="game-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GameCard;