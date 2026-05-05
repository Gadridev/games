import '../styles/Games.css';

const GameCard = ({ game, height = 220, onViewDetails }) => {
  const year = game.released 
    ? new Date(game.released).getFullYear() 
    : "N/A";

  const platforms = game.platforms?.length
    ? game.platforms.map(p => p.platform.name).slice(0, 2).join(" · ")
    : "N/A";

  const genre = game.genres?.[0]?.name || "Unknown";

  const rating = game.metacritic ?? game.rating ?? 0;

  return (
    <div 
      className="gcard" 
      onClick={() => onViewDetails(game.id)}
      style={{ cursor: "pointer" }}
    >
      <div className="gcard-img" style={{ height: `${height}px` }}>
        <img 
          src={game.background_image} 
          alt={game.name} 
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <div className="gcard-overlay"></div>

        <div className="gcard-action">
          <span className="action-pill">VIEW DETAILS</span>
        </div>

        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <span className="badge-score">{rating}</span>
        </div>

        <div style={{ position: "absolute", top: "10px", left: "10px" }}>
          <span className="badge-genre">{genre}</span>
        </div>
      </div>

      <div style={{ padding: "14px 16px" }}>
        <div 
          style={{
            fontWeight: 500,
            fontSize: "14px",
            color: "var(--ice)",
            marginBottom: "4px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {game.name}
        </div>

        <div 
          className="mono"
          style={{ fontSize: "9px", color: "var(--fog)", letterSpacing: "1px" }}
        >
          {year} · {platforms}
        </div>
      </div>
    </div>
  );
};

export default GameCard;