import "./TicTacToe.css";

const Square = ({ value, handleClick }) => {
  return (
    <div className="square" id={value} onClick={handleClick}>
      {value}
    </div>
  );
};

export default Square;
