import React from "react";

const MainMenu = ({ singlePlayerButton, multiplePlayerButton }) => {
  return (
    <div className="menu-container">
      <h1>Can you remember?</h1>
      <div className="button-container">
        <button
          onClick={singlePlayerButton}
          className="Button singlePlayerButton"
        >
          Single Player
        </button>
        <button
          onClick={multiplePlayerButton}
          className="Button multiPlayerButton"
        >
          Multi Player
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
