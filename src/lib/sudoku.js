import generator from "sudoku";

export function generateSudoku() {
  const fromUrl = extractUrlData();
  console.log("Got from url: ", fromUrl);
  const raw = fromUrl ? fromUrl.raw : generator.makepuzzle();
  const rawSolution = generator.solvepuzzle(raw);

  const formatted = raw.map(e => (e === null ? null : e + 1));
  const formattedSolution = rawSolution.map(e => e + 1);

  const result = {
    raw,
    rows: [],
    solution: formattedSolution,
    startTime: new Date(),
    solvedTime: null,
    challengerStartTime: fromUrl && fromUrl.startTime,
    challengerSolvedTime: fromUrl && fromUrl.solvedTime
  };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = formatted[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value !== null,
        focused: false
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }

  return result;
}

export function checkSolution(sudoku) {
  const candidate = sudoku.rows
    .map(row => row.cols.map(col => col.value))
    .flat();

  for (let i = 0; i < candidate.length; i++) {
    if (candidate[i] === null || candidate[i] !== sudoku.solution[i]) {
      return false;
    }
  }
  return true;
}

function extractUrlData() {
  const match = document.location.search.match(/sudoku=([^&]+)/);

  if (match) {
    return JSON.parse(atob(match[1]));
  }
  return null;
}