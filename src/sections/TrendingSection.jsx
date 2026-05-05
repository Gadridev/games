import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import "../styles/trendingStyle.css"

function TrendingSection({ games }) {
    const navigate = useNavigate();

    if (!games || games.length === 0) {
        return <p>No trending games</p>;
    }

    return (
        <section className="trending-section">

            <div className="spotlight-eyebrow" style={{ marginTop: '80px', marginBottom: '36px' ,marginLeft:'30px'}}>
                <span className="eyebrow-line" />
                <span className="eyebrow-text" >Trending Games</span>
                 <div className="rule"></div>
            </div>

            <div className="trending-grid" style={{ padding: "64px 32px" }}>
                {games.slice(0, 6).map((game, index) => (
                    <div key={game.id} onClick={() => navigate(`/games/${game.id}`)}>
                        <GameCard game={game} index={index} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrendingSection;