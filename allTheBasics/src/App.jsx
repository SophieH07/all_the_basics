import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";

import Header from "./layout/Header";
import TicTacToe from "./tictactoe/TicTacToe";
import Timer from "./timer/Timer";
import Posts from "./posts/Posts";
import TodoList from "./todolist/TodoList";
import MissingPage from "./error/MissingPage";
import Chess from "./chess/Chess";
import Connect4 from "./connect4/Connect4";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="timer" element={<Timer />} />
          <Route path="todolist" element={<TodoList />} />
          <Route path="posts" element={<Posts />} />
          <Route path="chess" element={<Chess />} />
          <Route path="Connect4" element={<Connect4 />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
