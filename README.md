# N-Queens Visualizer

## Overview

The **N-Queens Visualizer** is a web application that visualizes the N-Queens problem, allowing users to see how the algorithm places N queens on an N×N chessboard without them threatening each other. It demonstrates the backtracking algorithm used to find all valid arrangements of queens.

## Features

- **Input Field**: Enter the number of queens (N) to visualize.
- **Speed Control**: Adjust the speed of the visualization using a slider.
- **Responsive Design**: Works seamlessly on various devices.

## Technologies Used

- HTML
- CSS
- JavaScript

## Live Demo

You can view the live demo of the N-Queens Visualizer on Vercel:
[Live Demo](https://n-queen-visualizer-gules.vercel.app/)

## N-Queens Problem

### Problem Statement

The N-Queens Problem involves placing N queens on an N×N chessboard such that:

- Each row contains exactly one queen.
- Each column contains exactly one queen.
- No two queens are on the same diagonal.

### Example

For N = 4, one valid arrangement is:

Q . . . . . Q Q . . . . . Q .


### Solution Approach

The problem can be solved using **Backtracking**, a method where queens are placed one by one, checking for conflicts at each step. If a conflict occurs, the algorithm backtracks to try a different arrangement.

### Complexity

- **Time Complexity**: O(N!)
- **Space Complexity**: O(N)

## Acknowledgements

- Inspired by the classic N-Queens problem in computer science.

