import GameCard from "../components/GameCardTest";
import "../styles/Games.css"
const TopRatedSection = ({ games }) => {
  return (
    <div style={{ padding: '0 32px' }}>
      <div className="ruled-header" style={{ marginTop: '80px' }}>
        <div className="sec-label">TOP RATED</div>
        <div className="rule"></div>
      </div>
      
      <div className="srow" style={{ marginBottom: '80px' }}>
        {games.map((game) => (
          <div key={game.id} style={{ width: '200px' }}>
            <GameCard
              game={game} 
              height={160}
             
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopRatedSection