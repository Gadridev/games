import { useState } from "react";
import "../styles/spotlight.css";

export default function Spotlight({ games }) {
  const [hovered, setHovered] = useState(false);
  const label = "SPOTLIGHT";

  const game = {
    badge:
      games.rating >= 4
        ? "TOP RATED"
        : games.metacritic >= 80
        ? "CRITICALLY ACCLAIMED"
        : "POPULAR",

    title: games.name,
    score: games.rating?.toFixed(2),
    year: games.released?.split("-")[0],
    genre: games.genres?.map((g) => g.name).join(", "),
    backgroundImage: games.background_image,
  };

  const creator = {
    sectionLabel: "GAME DETAILS",
    name: `${games.playtime || "N/A"}h average playtime`,
    role: game.genre,
    company:
      games.parent_platforms
        ?.map((p) => p.platform.name)
        .join(", ") || "Unknown",

    bio:
      games.description_raw
        ?.replace(/<[^>]+>/g, "")
        .slice(0, 140) + "..." || "No description available",

    avatar:
      games.background_image_additional || games.background_image,

    buttonLabel: "VIEW GAME →",
  };

  return (
    <section className="spotlight-wrapper">
      <div className="spotlight-eyebrow">
        <span className="eyebrow-line" />
        <span className="eyebrow-text">{label}</span>
      </div>

      <div className="spotlight-card">
        <div className="game-hero">
          <img
            className="game-bg"
            src={game.backgroundImage}
            alt={game.title}
          />
          <div className="game-overlay" />

          <div className="game-content">
            <span className="game-badge">
              <span className="badge-line" />
              {game.badge}
            </span>

            <h1 className="game-title">{game.title}</h1>

            <div className="game-meta">
              <span className="game-score">{game.score}</span>
              <span className="game-sub">
                {game.year} · {game.genre}
              </span>
            </div>
          </div>
        </div>

        <div className="creator-panel">
          <span className="creator-eyebrow">
            <span className="badge-line" />
            {creator.sectionLabel}
          </span>

          <div className="creator-avatar-wrap">
            <img
              className="creator-avatar"
              src={creator.avatar}
              alt={creator.name}
            />
          </div>

          <h2 className="creator-name">{creator.name}</h2>

          <p className="creator-role">
            {creator.role} · {creator.company}
          </p>

          <p className="creator-bio">{creator.bio}</p>

          <button
            className={`creator-btn${hovered ? " hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {creator.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}