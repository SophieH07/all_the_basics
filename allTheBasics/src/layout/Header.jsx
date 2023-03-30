import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/tictactoe">Tic Tac Toe</Link>
      </div>
      <div>
        <Link to="/stopwatch">Stopwatch</Link>
      </div>
      <div>
        <Link to="/todolist">To-do list</Link>
      </div>
      <div>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Header;
