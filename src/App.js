import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Game from "./components/Game";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
