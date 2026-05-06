import { Link } from "react-router-dom";
import "../styles/CreatorStyle.css";

export function CreatorCard({ creator }) {
  const mainRole = creator.positions?.[0]?.name || "CREATOR";

  return (
    <Link to={`/creators/${creator.id}`} className="creator-card">
      <div
        className="creator-card__bg"
        style={{
          backgroundImage: `url(${creator.image_background || "https://placehold.co/400x300"})`
        }}
      />
      <div className="creator-card__overlay" />
      <div className="creator-card__badge">
        {mainRole}
      </div>
      <div className="creator-card__content">
        <h3 className="creator-card__name">{creator.name}</h3>
        {/* optionnel : si tu veux un sous-texte (ex: nb jeux) */}
        {/* <div className="creator-card__sub">GAME DESIGN</div> */}
      </div>
    </Link>
  );
}