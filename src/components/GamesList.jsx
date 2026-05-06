import React, { useEffect, useState } from "react";
import GamesFilter from "./GamesFilter";
import GameCard from "./GameAffichage";

function GameListe() {
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("all"); 
  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=86789db39829410ca7802dc05d3fc19c")
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  }, []);


  const filteredGames =
    category === "all"
      ? games
      : games.filter((game) =>
          game.genres.some((g) => g.name === category)
        );

  return (
    <div>
    
      <GamesFilter setCategory={setCategory} />

    
      <div className="games-container">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default GameListe;