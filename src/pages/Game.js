// src/pages/Game.js
import React, { useEffect, useState, useRef } from "react";
import "./Game.css";

function Game() {
  const [isJumping, setIsJumping] = useState(false);
  const [obstacleLeft, setObstacleLeft] = useState(500);
  const [obstacleHeight, setObstacleHeight] = useState(50);
  const [score, setScore] = useState(0);
  const characterRef = useRef(null);
  const gameOverRef = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space" && !isJumping) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isJumping]);

  useEffect(() => {
    if (gameOverRef.current) return;

    const obstacleInterval = setInterval(() => {
      setObstacleLeft((prev) => {
        if (prev <= 0) {
          setScore((prevScore) => prevScore + 1);
          setObstacleHeight(Math.random() * 80 + 20); // Random height between 20-100px
          return 500; // Reset obstacle position
        }
        return prev - 10;
      });
    }, 50);

    const collisionCheck = setInterval(() => {
      const character = characterRef.current;
      if (character) {
        const characterBottom = isJumping ? 100 : 0;
        if (
          obstacleLeft < 80 &&
          obstacleLeft > 20 &&
          !isJumping && // Only trigger game over if NOT jumping
          characterBottom < obstacleHeight
        ) {
          alert("Game Over! Your score: " + score);
          gameOverRef.current = true;
          window.location.reload();
        }
      }
    }, 50);

    return () => {
      clearInterval(obstacleInterval);
      clearInterval(collisionCheck);
    };
  }, [obstacleLeft, isJumping, obstacleHeight, score]);

  return (
    <div className="game-container">
      <h1>Jump Over the Obstacles!</h1>
      <h2>Score: {score}</h2>
      <div className="game-area">
        <div
          ref={characterRef}
          className={`character ${isJumping ? "jump" : ""}`}
        ></div>
        <div
          className="obstacle"
          style={{ left: `${obstacleLeft}px`, height: `${obstacleHeight}px` }}
        ></div>
      </div>
      <p>Press SPACE to jump!</p>
    </div>
  );
}

export default Game;