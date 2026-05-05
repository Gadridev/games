import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";

function TrendingSection({ games }) {
  const navigate = useNavigate();

  if (!games || games.length === 0) {
    return <p>No trending games</p>;
  }

  return (
    <section  className="trending-section">
      <h2>Trending Games</h2>

      <div className="trending-grid">
        {games.slice(0, 6).map((game) => (
          <div
            key={game.id}
            onClick={() => navigate(`/games/${game.id}`)}
          >
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;