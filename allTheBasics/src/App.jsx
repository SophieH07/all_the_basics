import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";

import Header from "./layout/Header";
import TicTacToe from "./tictactoe/TicTacToe";
import Stopwatch from "./stopwatch/Stopwatch";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="stopwatch" element={<Stopwatch />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
