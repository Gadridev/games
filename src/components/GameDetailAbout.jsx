function GameDetailAbout({ game }) {
  return (
    <div className="left">
      <GameDetailDescription description={game.description_raw} />
      <GameDetailRatings ratings={game.ratings} />
      <GameDetailTags tags={game.tags} />
      <GameDetailMiniStats game={game} />
    </div>
  );
}


function GameDetailDescription({ description }) {
  return (
    <>
      <div className="section-label">
        <span className="badge-line" />
        About
      </div>
      <p className="desc">{description}</p>
    </>
  );
}


function GameDetailRatings({ ratings }) {
  return (
    <>
      <div className="section-label">
        <span className="badge-line" />
        Player Ratings
      </div>

      <div className="ratings-row">
        {ratings.map((r) => (
          <RatingBar key={r.id} rating={r} />
        ))}
      </div>
    </>
  );
}

function RatingBar({ rating }) {
  return (
    <div className="rating-item">
      <span className="r-label">{rating.title}</span>

      <div className="r-track">
        <div
          className={`r-fill r-${rating.title}`}
          style={{ width: `${rating.percent}%` }}
        />
      </div>

      <span className="r-pct">{rating.percent.toFixed(1)}%</span>
    </div>
  );
}

function GameDetailTags({ tags }) {
  return (
    <>
      <div className="section-label">
        <span className="badge-line" />
        Tags
      </div>

      <div className="tags-wrap">
        {tags.slice(0, 12).map((tag) => (
          <span className="tag" key={tag.id}>
            {tag.name}
          </span>
        ))}
      </div>
    </>
  );
}

function GameDetailMiniStats({ game }) {
  const stats = [
    { label: "Reviews",      value: game.reviews_count },
    { label: "Achievements", value: game.achievements_count },
    { label: "Beaten",       value: game.added_by_status?.beaten },
    { label: "Dropped",      value: game.added_by_status?.dropped },
  ];

  return (
    <div className="stats-mini">
      {stats.map(({ label, value }) => (
        <div className="mini-card" key={label}>
          <div className="mini-label">{label}</div>
          <div className="mini-val">{value}</div>
        </div>
      ))}
    </div>
  );
}

export default GameDetailAbout;