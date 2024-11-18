import React, { useState } from "react";
import "./App.css";
import MainMenu from "./MainMenu";
import cardsData from "./CardsData";
import CardFlips from "./CardFlips";

function MemoryGame() {
  const [showCards, setShowCards] = useState(false);
  const [cards, setCards] = useState(cardsData);

  const singlePlayer = () => {
    setShowCards(true);
    alert("You chose Single Player!");
  };

  const multiPlayer = () => {
    setShowCards(true);
    alert("You chose Multi Player!");
  };

  const reset = () => {
    const resetCards = cards.map((card) => ({ ...card, flipped: false }));
    setCards(resetCards);
    setShowCards(false);
    alert("Game has been reset!");
  };

  const handleFlip = (id) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: !card.flipped } : card
    );
    setCards(updatedCards);
  };

  return (
    <div className="container">
      {showCards ? (
        <CardFlips cards={cards} handleFlip={handleFlip} reset={reset} />
      ) : (
        <MainMenu
          singlePlayerButton={singlePlayer}
          multiplePlayerButton={multiPlayer}
          reset={reset}
        />
      )}
    </div>
  );
}

export default MemoryGame;
