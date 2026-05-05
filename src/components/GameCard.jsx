import '../trendingStyle.css'; 
function GameCard({ game }) {
    return (
        <div className="game-card">
            <img
                src={game.background_image || "https://via.placeholder.com/300"}
                alt={game.name}
            />

            <h3>{game.name}</h3>

            <p>⭐{game.rating}</p>

            <p> {game.released}</p>
        </div>
    );
}

export default GameCard;
