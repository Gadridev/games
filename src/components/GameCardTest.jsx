import '../styles/Games.css';

const GameCard = ({ game, height = 220, onViewDetails }) => {
  const isRawgFormat = game.genres !== undefined && Array.isArray(game.genres);
  
  const gameImage = isRawgFormat 
    ? (game.background_image || 'https://via.placeholder.com/600x400?text=No+Image')
    : game.img;
  
  const gameGenre = isRawgFormat 
    ? (game.genres?.[0]?.name || 'Unknown')
    : game.genre;
  
  const gameRating = isRawgFormat 
    ? (game.metacritic || game.rating || 0)
    : game.rating;
  
  const gameYear = isRawgFormat 
    ? new Date(game.released).getFullYear()
    : game.year;
  
  const gamePlatforms = isRawgFormat 
    ? game.parent_platforms?.map(p => p.platform.name).slice(0, 2) || []
    : game.platforms?.slice(0, 2) || [];
  
  const platformsText = gamePlatforms.length > 0 
    ? gamePlatforms.join(' · ')
    : 'N/A';

  return (
    <div 
      className="gcard" 
      onClick={() => onViewDetails(game.id)}
      style={{ cursor: 'pointer' }}
    >
      <div className="gcard-img" style={{ height: `${height}px` }}>
        <img 
          src={gameImage} 
          alt={game.name} 
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="gcard-overlay"></div>
        <div className="gcard-action">
          <span className="action-pill">VIEW DETAILS</span>
        </div>
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <span className="badge-score">{gameRating}</span>
        </div>
        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <span className="badge-genre">{gameGenre}</span>
        </div>
      </div>
      <div style={{ padding: '14px 16px' }}>
        <div 
          style={{
            fontWeight: 500,
            fontSize: '14px',
            color: 'var(--ice)',
            marginBottom: '4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {game.name}
        </div>
        <div className="mono" style={{ fontSize: '9px', color: 'var(--fog)', letterSpacing: '1px' }}>
          {gameYear} · {platformsText}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
