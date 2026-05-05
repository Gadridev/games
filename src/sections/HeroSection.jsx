import { useNavigate } from "react-router-dom";


function HeroSection({ game }) {
  const navigate = useNavigate();

  if (!game) return null;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${game.background_image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          
          <span className="badge">TOP RATED</span>

          <h1>
            {game.name}
          </h1>

          <div className="hero-meta">
            <span>⭐ {game.rating}</span>
            <span>{game.released}</span>
            <span>
              {game.genres?.slice(0, 2).map(g => g.name).join(", ")}
            </span>
          </div>

          <div className="hero-buttons">
            <button onClick={() => navigate(`/games/${game.id}`)}>
              View Details
            </button>

            <button className="secondary">
              Browse Games
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;