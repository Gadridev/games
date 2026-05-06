<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 2ed35eb (solve conflict in app.js)

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.background_image} alt={game.name} />

      <div className="rating">{game.rating}</div>

      <div className="game-info">
        <h3>{game.name}</h3>
        <span>{game.released}</span>
      </div>
    </div>
  );
}

export default GameCard;