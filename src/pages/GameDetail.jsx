import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../api/homeApi";

import Loader from "../components/Loader";
import "../styles/gameDetails.css";
import GameDetailHero from "../components/GameDetailHero";
import GameDetailAbout from "../components/GameDetailAbout";
import GameDetailSidebar from "../components/GameDetailSidebare";

function GameDetail() {
  const { game_id } = useParams();

  const [game,    setGame]    = useState(null);
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

  if (loading) return <Loader />;
  if (!game)   return <p>Game not found</p>;

  return (
    <div>
      <div className="wrap">
        <GameDetailHero game={game} />
        <div className="body">
          <GameDetailAbout   game={game} />
          <GameDetailSidebar game={game} />
        </div>
      </div>
    </div>
  );
}

export default GameDetail;