import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../api/homeApi";
import "../styles/gameDetails.css"
function GameDetail() {
  const { game_id } = useParams();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGame = async () => {
      try {
        const data = await fetchGameById(game_id);
        setGame(data);
      } catch (err) {
        console.error("Error fetching game:", err);
      } finally {
        setLoading(false);
      }
    };

    getGame();
  }, [game_id]);

  if (loading) return <p>Loading...</p>;
  if (!game) return <p>Game not found</p>;

  return (
    <div>
      <div className="wrap">
        {/* HERO */}
        <div className="hero">
          <img src={game.background_image} alt={game.name} />

          <div className="hero-grad"></div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-line"></span>
              {game.developers?.[0]?.name || "Unknown"} ·{" "}
              {game.released?.split("-")[0]} ·{" "}
              {game.genres?.[0]?.name}
            </div>

            <div className="hero-title">{game.name}</div>

            <div className="hero-meta">
              <span className="score-pill">{game.rating}</span>

              <span className="mc-pill">
                MC {game.metacritic || "N/A"}
              </span>

              <span className="meta-sep">·</span>

              <span className="meta-tag">
                {game.esrb_rating?.name || "N/A"}
              </span>

              <span className="meta-sep">·</span>

              <span className="meta-tag">
                {game.playtime || 0} HRS
              </span>

              <span className="meta-sep">·</span>

              <span className="meta-tag">
                {game.added?.toLocaleString()} PLAYERS
              </span>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="body">
          {/* LEFT */}
          <div className="left">
            <div className="section-label">
              <span className="badge-line"></span>About
            </div>

            <p className="desc">
              {game.description_raw}
            </p>

            {/* RATINGS */}
            <div className="section-label">
              <span className="badge-line"></span>Player Ratings
            </div>

            <div className="ratings-row">
              {game.ratings.map((r) => (
                <div className="rating-item" key={r.id}>
                  <span className="r-label">{r.title}</span>

                  <div className="r-track">
                    <div
                      className={`r-fill r-${r.title}`}
                      style={{ width: `${r.percent}%` }}
                    ></div>
                  </div>

                  <span className="r-pct">
                    {r.percent.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>

            {/* TAGS */}
            <div className="section-label">
              <span className="badge-line"></span>Tags
            </div>

            <div className="tags-wrap">
              {game.tags.slice(0, 12).map((tag) => (
                <span className="tag" key={tag.id}>
                  {tag.name}
                </span>
              ))}
            </div>

            {/* MINI STATS */}
            <div className="stats-mini">
              <div className="mini-card">
                <div className="mini-label">Reviews</div>
                <div className="mini-val">
                  {game.reviews_count}
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-label">Achievements</div>
                <div className="mini-val">
                  {game.achievements_count}
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-label">Beaten</div>
                <div className="mini-val">
                  {game.added_by_status?.beaten}
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-label">Dropped</div>
                <div className="mini-val">
                  {game.added_by_status?.dropped}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            {/* RELEASE */}
            <div className="stat-block">
              <div className="stat-label">Released</div>
              <div className="stat-val">{game.released}</div>
            </div>

            <div className="divider"></div>

            {/* DEV */}
            <div className="stat-block">
              <div className="stat-label">Developer</div>

              <div className="stat-val">
                {game.developers
                  ?.map((d) => d.name)
                  .join(", ")}
              </div>

              <div className="stat-sub">
                Published by{" "}
                {game.publishers
                  ?.map((p) => p.name)
                  .join(", ")}
              </div>
            </div>

            <div className="divider"></div>

            {/* PLATFORMS */}
            <div className="stat-block">
              <div className="stat-label">Platforms</div>

              <div className="platforms-wrap">
                {game.platforms.map((p) => (
                  <span
                    className="platform-chip"
                    key={p.platform.id}
                  >
                    {p.platform.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="divider"></div>

            {/* STORES */}
            <div className="stat-block">
              <div className="stat-label">Available On</div>

              <div className="stores-wrap">
                {game.stores.map((s) => (
                  <div className="store-row" key={s.id}>
                    <span className="store-dot"></span>
                    <span className="store-name">
                      {s.store.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="divider"></div>

            {/* COMMUNITY */}
            <div className="stat-block">
              <div className="stat-label">Community</div>

              <div className="stat-val">
                {game.reddit_count} Reddit
              </div>

              <div className="stat-sub">
                {game.twitch_count} Twitch ·{" "}
                {game.youtube_count} YouTube
              </div>
            </div>

            <div className="divider"></div>

            {/* COLLECTION */}
            <div className="stat-block">
              <div className="stat-label">In Collections</div>

              <div className="stat-val">
                {game.added?.toLocaleString()}
              </div>

              <div className="stat-sub">
                owned ·{" "}
                {game.added_by_status?.toplay} want to play
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;