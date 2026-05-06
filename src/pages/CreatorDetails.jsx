import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import Loader from "../components/Loader";
import "../styles/creatorDetails.css";
import { fetchCreatorById, fetchGamesByCreator } from "../api/homeApi";




function CreatorDetail() {
  const { creatorId } = useParams();
  const navigate       = useNavigate();

  const [creator, setCreator] = useState(null);
  const [games,   setGames]   = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [creatorData, gamesData] = await Promise.all([
          fetchCreatorById(creatorId),
          fetchGamesByCreator(creatorId),
        ]);
        setCreator(creatorData);
        setGames(gamesData);
      } catch (err) {
        console.error("Error loading creator:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [creatorId]);

  if (loading) return <Loader />;
  if (!creator) return <p>Creator not found</p>;

  return (
    <div className="creator-detail">
      <button className="creator-detail__back" onClick={() => navigate("/creators")}>
        ← BACK TO CREATORS
      </button>

      <div className="creator-profile">
        <img
          className="creator-profile__img"
          src={creator.image}
          alt={creator.name}
        />

        <div className="creator-profile__info">
          <div className="creator-profile__label">
            <span className="creator-profile__label-line" />
            CREATOR PROFILE
          </div>

          <h1 className="creator-profile__name">{creator.name}</h1>

          <p className="creator-profile__role">
            {creator.positions?.map((p) => p.name).join(" · ") || "Game Creator"}
          </p>

          <p className="creator-profile__bio">
            {creator.description || "No description available."}
          </p>
        </div>
      </div>

      <div className="creator-detail__rule" />

      <div className="creator-games__label">
        <span className="creator-profile__label-line" />
        GAMES BY {creator.name.toUpperCase().split(" ")[0]}
      </div>

      {games.length > 0 ? (
        <div className="creator-games__row">
          {games.map((game) => (
            <div key={game.id} style={{ width: 220, flexShrink: 0, scrollSnapAlign: "start" }}>
              <GameCard game={game} height={170} />
            </div>
          ))}
        </div>
      ) : (
        <p className="creator-games__empty">No games found</p>
      )}
    </div>
  );
}

export default CreatorDetail;