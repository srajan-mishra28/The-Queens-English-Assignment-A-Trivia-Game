import React, { useState, useEffect } from "react";
import Gameover from "./Gameover";
import "./game.css";

export default function Game() {
  const [ques, setQues] = useState({});
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [showGameOver, setShowGameOver] = useState(true);

  function checkAns() {
    let ansString = ques.answer.split(" ").join("").toLowerCase();
    let inpString = input.trim().split(" ").join("").toLowerCase();
    if (ansString === inpString) {
      setCount(count + 1);
      setError("");
      setScore(score + 10);
    } else {
      setError("Wrong Answer");
      setScore(score - 5);
    }
  }

  useEffect(() => {
    fetch("https://jservice.io/api/random")
      .then((res) => res.json())
      .then((item) => {
        setQues(item[0]);
      });
  }, [count]);
  return (
    <>
      {count === 5 || score === -20 ? (
        showGameOver && (
          <Gameover
            score={score}
            setScore={setScore}
            setCount={setCount}
            setShowGameOver={setShowGameOver}
            setError={setError}
          />
        )
      ) : (
        <div className="game">
          <p>
            <span>
              {" "}
              <b>Q-</b>
            </span>
            {ques.question}
          </p>
          <label>
            <i
              onClick={() => {
                console.log(ques.answer);
              }}
            >
              Your answer goes here-
            </i>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </label>
          <div className="button">
            <button
              type="submit"
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                checkAns();
                setInput("");
              }}
            >
              Submit
            </button>
          </div>
          <div className="error">
            <p>{error ? error : null}</p>
          </div>
          <div>
            <i>Score:</i>
            <span className="score">{score}</span>
          </div>
        </div>
      )}
    </>
  );
}
