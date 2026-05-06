import  { useState, useEffect } from "react";
import GamesFilter from "../components/GamesFilter";
import GameCard from "../components/GameAffichage";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import "../styles/GameListe.css";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch("https://api.rawg.io/api/games?key=86789db39829410ca7802dc05d3fc19c")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
        setLoading(false);
      });
  }, []);

  const filteredGames =
    category === "all"
      ? games
      : games.filter((game) =>
          game.genres?.some((g) => g.name === category)
        );

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader text="LOADING GAMES" />
      </>
    );
  }

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch("https://api.rawg.io/api/games?key=86789db39829410ca7802dc05d3fc19c")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
        setLoading(false);
      });
  }, []);

  const filteredGames =
    category === "all"
      ? games
      : games.filter((game) =>
          game.genres?.some((g) => g.name === category)
        );

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader text="LOADING GAMES" />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="games-page">
        <div className="page-header">
          <h1>
            EXPLORE <span>ALL GAMES</span>
          </h1>
        </div>
        <GamesFilter setCategory={setCategory} activeCategory={category} />
        <div className="games-container">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
    <>
      <Navbar />
      <div className="games-page">
        <div className="page-header">
          <h1>
            EXPLORE <span>ALL GAMES</span>
          </h1>
        </div>
        <GamesFilter setCategory={setCategory} activeCategory={category} />
        <div className="games-container">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Games;
export default Games;