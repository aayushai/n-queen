// src/Board.js

import React from 'react';
import Queen from './Queen';
import './App.css';

const Board = ({ size, queens, attackedSquares }) => {
    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
        width: '400px',
        height: '400px',
    };

    return (
        <div style={boardStyle} className="board">
            {Array.from({ length: size }, (_, row) => (
                Array.from({ length: size }, (_, col) => {
                    const isQueen = queens.some(q => q[0] === row && q[1] === col);
                    const isAttacked = attackedSquares.some(sq => sq[0] === row && sq[1] === col);
                    return (
                        <div
                            key={`${row}-${col}`}
                            className={`square ${isQueen ? 'queen' : ''} ${isAttacked ? 'attacked' : ''}`}
                        >
                            {isQueen && <Queen />}
                        </div>
                    );
                })
            ))}
        </div>
    );
};

export default Board;
