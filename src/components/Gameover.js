import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./gameover.css";

export default function Gameover(props) {
  const navigate = useNavigate();
  const { score, setScore, setCount, setShowGameOver, setError } = props;

  function restartGame() {
    setCount(0);
    setScore(0);
    setError("");
  }
  return (
    <div className="game-over">
      {score === 50 ? (
        <strong id="congrats">Congratulations on reaching top score</strong>
      ) : (
        <strong>Game Over</strong>
      )}
      <p className="score">
        Your Score: <span id="score">{score}</span>
      </p>

      <button
        type="button"
        className="play-button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/game");
          restartGame();
        }}
      >
        Play again
      </button>
      <button className="home-button" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}
