import React from "react";
import "./game.css";

const MemoryGame = props => (
  <div className="boxCard">
    <img
      onClick={props.onClick}
      dataid={props.id}
      alt={props.name}
      src={props.image}
      width="200px"
      height="200px"
    />
  </div>
);

export default MemoryGame;
