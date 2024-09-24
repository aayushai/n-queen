// src/NQueenVisualizer.js
import React, { useState, useEffect } from 'react';
import './NQueenVisualizer.css';

const NQueenVisualizer = () => {
  const [board, setBoard] = useState([]);
  const [size, setSize] = useState(8); // Default N=8
  const [isSolving, setIsSolving] = useState(false);

  useEffect(() => {
    resetBoard();
  }, [size]);

  const resetBoard = () => {
    const emptyBoard = Array(size)
      .fill(0)
      .map(() => Array(size).fill(0));
    setBoard(emptyBoard);
  };

  const isSafe = (board, row, col) => {
    // Check current column and diagonals for any conflicts
    for (let i = 0; i < row; i++) {
      if (
        board[i][col] ||
        (col - (row - i) >= 0 && board[i][col - (row - i)]) ||
        (col + (row - i) < size && board[i][col + (row - i)])
      ) {
        return false;
      }
    }
    return true;
  };

  const solveNQueens = async (board, row) => {
    if (row === size) {
      setBoard([...board]);
      return true;
    }

    for (let col = 0; col < size; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = 1;
        setBoard([...board]);
        await delay(500); // Pause for visualization
        if (await solveNQueens(board, row + 1)) {
          return true;
        }
        board[row][col] = 0; // Backtrack
        setBoard([...board]);
        await delay(500);
      }
    }
    return false;
  };

  const startSolving = async () => {
    setIsSolving(true);
    resetBoard();
    const emptyBoard = Array(size)
      .fill(0)
      .map(() => Array(size).fill(0));
    await solveNQueens(emptyBoard, 0);
    setIsSolving(false);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="nqueen-visualizer">
      <div className="controls">
        <label htmlFor="size">Board Size (N):</label>
        <input
          type="number"
          id="size"
          value={size}
          min="4"
          max="12"
          onChange={(e) => setSize(parseInt(e.target.value))}
          disabled={isSolving}
        />
        <button onClick={startSolving} disabled={isSolving}>
          Start Solving
        </button>
        <button onClick={resetBoard} disabled={isSolving}>
          Reset
        </button>
      </div>

      <div className="chessboard">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell ? 'queen' : ''}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NQueenVisualizer;
