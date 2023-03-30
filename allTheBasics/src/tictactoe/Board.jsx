import { useState } from "react";
import Square from "./Square";
import "./TicTacToe.css";

const Board = ({ squares, xIsNext, setXIsNext }) => {
  return (
    <div className="board">
      {squares.map((square) => (
        <Square
          key={square}
          value={square}
          xIsNext={xIsNext}
          setXIsNext={setXIsNext}
        />
      ))}
    </div>
  );
};

export default Board;
