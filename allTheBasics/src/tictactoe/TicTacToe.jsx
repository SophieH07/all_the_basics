import { useState } from "react";
import Board from "./Board";
import Square from "./Square";
import "./TicTacToe.css";

const TicTacToe = () => {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [xIsNext, setXIsNext] = useState(true);
  const [historyOfWinners, setHistoryOfWinners] = useState([]);
  const [gameAborted, setGameAborted] = useState(false);

  const startNewGame = () => {
    setXIsNext(true);
    setGameAborted(true);
  };

  return (
    <div className="content">
      <p>Let's play!</p>
      <p>Next player: {xIsNext ? "X" : "O"}</p>
      <div className="game">
        <Board squares={squares} xIsNext={xIsNext} setXIsNext={setXIsNext} />
        <div>
          History of winners:
          {historyOfWinners.length === 0 ? (
            <p>No games have been played</p>
          ) : (
            historyOfWinners.map((winner) => <p>{winner}</p>)
          )}
        </div>
      </div>
      <div>
        <button onClick={startNewGame}>New Game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
