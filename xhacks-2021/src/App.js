import React, { Component } from "react";
import './App.css';
import generator from "sudoku";
import SudokuBoard from "./components/SudokuBoard";
import Pad from "./components/Pad";
import puzzles from './examples.js'

window.generator = generator;

function generateSudoku() {
  const raw = generator.makepuzzle()
  const result = {rows: []}

  for (let i=0; i<9; i++) {
    const row = {cols: [], index: i}
    for (let j=0; j<9; j++) {
      const value = raw[i*9+j]
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value !== null
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
}

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
    this.state = {
      sudoku: importSudoku()
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Sudoku
          </h1>
        </header>
        <SudokuBoard sudoku={this.state.sudoku}/>
        <Pad/>
      </div>
    );
  }
}

export default App;
