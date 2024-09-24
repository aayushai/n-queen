// src/App.js

import React, { useState, useEffect } from 'react';
import Board from './Board';
import { solveNQueens } from './utils';
import SpeedSlider from './SpeedSlider';
import './App.css';

const App = () => {
    const [size, setSize] = useState(4);
    const [queens, setQueens] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [solutionIndex, setSolutionIndex] = useState(0);
    const [speed, setSpeed] = useState(1000);
    const [attackedSquares, setAttackedSquares] = useState([]);

    useEffect(() => {
        const newSolutions = solveNQueens(size);
        setSolutions(newSolutions);
        setSolutionIndex(0);
        setQueens(newSolutions[0] || []);
        highlightAttackedSquares(newSolutions[0] || []);
    }, [size]);

    useEffect(() => {
        if (solutions.length > 0) {
            const interval = setInterval(() => {
                if (solutionIndex < solutions.length - 1) {
                    setSolutionIndex(prev => prev + 1);
                    setQueens(solutions[solutionIndex + 1]);
                    highlightAttackedSquares(solutions[solutionIndex + 1]);
                } else {
                    clearInterval(interval);
                }
            }, speed);

            return () => clearInterval(interval);
        }
    }, [solutionIndex, speed, solutions]);

    const highlightAttackedSquares = (currentSolution) => {
        const attacked = [];
        for (const [row, col] of currentSolution) {
            for (let i = 0; i < size; i++) {
                attacked.push([row, i]); // Row
                attacked.push([i, col]); // Column
                if (row + i < size && col + i < size) attacked.push([row + i, col + i]); // Diagonal \
                if (row - i >= 0 && col - i >= 0) attacked.push([row - i, col - i]); // Diagonal /
                if (row + i < size && col - i >= 0) attacked.push([row + i, col - i]); // Diagonal /
                if (row - i >= 0 && col + i < size) attacked.push([row - i, col + i]); // Diagonal \
            }
        }
        setAttackedSquares([...new Set(attacked.map(JSON.stringify))].map(JSON.parse));
    };

    return (
        <div className="app">
            <h1>N-Queens Visualizer</h1>
            <div>
                <label>
                    Select Board Size:
                    <input
                        type="number"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        min="4"
                        max="10"
                    />
                </label>
            </div>
            <SpeedSlider speed={speed} setSpeed={setSpeed} />
            <Board size={size} queens={queens} attackedSquares={attackedSquares} />
        </div>
    );
};

export default App;
