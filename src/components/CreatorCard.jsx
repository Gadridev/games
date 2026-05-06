import { Link } from "react-router-dom";
import "../styles/CreatorStyle.css";

export function CreatorCard({ creator }) {
  const mainRole = creator.positions?.[0]?.name || "CREATOR";
  console.log(creator)

  return (
    <Link to={`/creators/${creator.id}`} className="creator-card">
      <div
        className="creator-bg"
        style={{
          backgroundImage: `url(${creator.image || "https://placehold.co/400x300"})`
        }}
      />
      <div className="creator-overlay" />
      <div className="creator-content">
        <span className="creator-role">{mainRole}</span>
        <h3>{creator.name}</h3>
      </div>
    </Link>
  );
}