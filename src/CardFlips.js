import React from "react";

function CardFlips({ cards, handleFlip, reset }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${card.flipped ? "flipped" : ""}`}
          onClick={() => handleFlip(card.id)}
        >
          <div className="card-front">
            <img src={card.image} alt="Card Front" />
          </div>
          <div className="card-back">
            <img src={card.image2} alt={`Card ${card.id} Back`} />
          </div>
        </div>
      ))}
      <button className="Button reset-small" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default CardFlips;
