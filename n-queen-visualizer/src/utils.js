// src/utils.js

export const solveNQueens = (n) => {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill(0));

    const isSafe = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 1) return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 1) return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 1) return false;
        }
        return true;
    };

    const placeQueens = (row) => {
        if (row === n) {
            solutions.push(board.map(r => r.slice())); // Save the current solution
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 1;
                placeQueens(row + 1);
                board[row][col] = 0; // Backtrack
            }
        }
    };

    placeQueens(0);
    return solutions;
};
