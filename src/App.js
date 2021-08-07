import React, { Component } from "react";
import { generateSudoku, checkSolution, shareUrl } from "./lib/sudoku";
import produce from "immer";
import SudokuBoard from "./components/SudokuBoard";
import "./App.css";
import generator from "sudoku";
import Pad from "./components/Pad";
import puzzles from './examples.js'

window.generator = generator;

function importSudoku() {
  let count = 0
  const index = Math.floor(Math.random() * 100)
  const sudoku = puzzles[index]
  const result = {rows: []}
  for (let i = 0; i < 9; i++) {
    const row = {cols: [], index: i}
    for (let j = 0; j < 9; j++) {
      let value = parseInt(sudoku[count]);
      if (value === 0) {
        value = null;
      }
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value !== null
      };
      row.cols.push(col);
      count++
    }
    result.rows.push(row)
  }
  return result
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = produce({}, () => ({
      sudoku: generateSudoku()
    }));
  }

  handleChange = e => {
    this.setState(
      produce(state => {
        state.sudoku.rows[e.row].cols[e.col].value = e.value;
        if (!state.sudoku.solvedTime) {
          const solved = checkSolution(state.sudoku);
          if (solved) {
            state.sudoku.solveTime = new Date();
            state.sudoku.shareUrl = shareUrl(state.sudoku);
          }
        }
      })
    );
  };

  solveSudoku = e => {
    this.setState(
      produce(state => {
        state.sudoku.rows.forEach(row =>
          row.cols.forEach(col => {
            col.value = state.sudoku.solution[col.row * 9 + col.col];
          })
        );
      })
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku Stack</h1>
        </header>
        <SudokuBoard sudoku={this.state.sudoku} onChange={this.handleChange} />

        <button onClick={this.solveSudoku}>Solve it Magically!</button>
      </div>
    );
  }
}

export default App;
