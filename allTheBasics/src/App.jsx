import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";

import Header from "./layout/Header";
import TicTacToe from "./tictactoe/TicTacToe";
import Timer from "./timer/Timer";
import Posts from "./posts/Posts";
import TodoList from "./todolist/TodoList";

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
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
