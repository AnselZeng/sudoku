import React, { Component } from "react";

export default class Result extends Component {
  render() {
    const { sudoku } = this.props;
    const elapsed = Math.floor(
      (sudoku.solveTime.getTime() - sudoku.startTime.getTime()) / 1000
    );
    const opponent = sudoku.challengerSolvedTime
      ? Math.floor(
          (sudoku.challengerSolvedTime.getTime() -
            sudoku.challengerStartTime.getTime()) /
            1000
        )
      : null;

    return (
      <div>
        <h2>You solved the sudoku in {elapsed} seconds</h2>
      </div>
    );
  }
}