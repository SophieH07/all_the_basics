import React, { useState } from "react";
import "./TicTacToe.css";

const Square = ({ value, xIsNext, setXIsNext }) => {
  const [squareValue, setSquareValue] = useState("");
  const handleChange = () => {
    if (squareValue === "") {
      if (xIsNext) {
        setSquareValue("X");
      } else {
        setSquareValue("O");
      }
      setXIsNext(!xIsNext);
    }
  };

  return (
    <div className="square" id={value} onClick={handleChange}>
      {squareValue}
    </div>
  );
};

export default Square;
