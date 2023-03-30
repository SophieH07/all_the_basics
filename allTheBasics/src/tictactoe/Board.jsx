import Square from "./Square";
import "./TicTacToe.css";

const Board = ({ squares, handleClick }) => {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} handleClick={() => handleClick(i)} />
      ))}
    </div>
  );
};

export default Board;
