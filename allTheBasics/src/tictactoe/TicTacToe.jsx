import { useEffect, useRef, useState } from "react";
import Board from "./Board";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [historyOfWinners, setHistoryOfWinners] = useState([]);
  const [winner, setWinner] = useState(null);
  const winnerRef = useRef();

  useEffect(() => {
    winnerRef.current?.lastElementChild?.scrollIntoView();
  }, [winner]);

  const handleAbort = () => {
    setXIsNext(true);
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  const calculateWin = (currentBoard) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const filledBoardLength = currentBoard.filter((x) => x).length;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    if (filledBoardLength >= 8) {
      return "DRAW";
    }
    return null;
  };

  const handleClick = (i) => {
    const currentBoard = [...board];
    if (!currentBoard[i]) {
      currentBoard[i] = xIsNext ? "X" : "O";
      setBoard(currentBoard);
      setXIsNext(!xIsNext);
    }
    let currentWinner = calculateWin(currentBoard);
    setWinner(currentWinner);
    if (currentWinner) {
      if (winner) {
        handleAbort();
      } else {
        setHistoryOfWinners([...historyOfWinners, currentWinner]);
      }
    }
  };

  return (
    <div className="content">
      <p>Let's play!</p>
      <p style={{ fontWeight: "bold" }}>
        {winner === "DRAW"
          ? "It's a draw!"
          : winner
          ? "Winner is: " + winner
          : "Next player: " + (xIsNext ? "X" : "O")}
      </p>
      <div className="game">
        <Board squares={board} handleClick={handleClick} />
        <div>
          <p>History of winners:</p>
          {historyOfWinners.length === 0 ? (
            <p>No winner yet</p>
          ) : (
            <div ref={winnerRef} className="winner-list">
              {historyOfWinners.map((winner, i) => (
                <p key={i}>{winner}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <button onClick={handleAbort}>New Game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
