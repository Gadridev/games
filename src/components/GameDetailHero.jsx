function GameDetailHero({ game }) {
  return (
    <div className="heros">
      <img src={game.background_image} alt={game.name} />

      <div className="hero-grad" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-line" />
          {game.developers?.[0]?.name || "Unknown"} &middot;{" "}
          {game.released?.split("-")[0]} &middot;{" "}
          {game.genres?.[0]?.name}
        </div>

        <div className="hero-title">{game.name}</div>

        <div className="hero-meta">
          <span className="score-pill">{game.rating}</span>

          <span className="mc-pill">MC {game.metacritic || "N/A"}</span>

          <span className="meta-sep">·</span>
          <span className="meta-tag">{game.esrb_rating?.name || "N/A"}</span>

          <span className="meta-sep">·</span>
          <span className="meta-tag">{game.playtime || 0} HRS</span>

          <span className="meta-sep">·</span>
          <span className="meta-tag">{game.added?.toLocaleString()} PLAYERS</span>
        </div>
      </div>
    </div>
  );
}

export default GameDetailHero;