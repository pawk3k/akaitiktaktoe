let turn = 'x';
let symbols = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const board = document.querySelector('.board');
const tiles = Array.from(document.querySelectorAll('.tile'));

board.addEventListener('click', ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes('tile') && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === 'x' ? 'o' : 'x';

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  const h1 = document.getElementsByClassName('turn')[0];
  h1.innerHTML = `${turn.toUpperCase()} turn`;
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const innerSymbols = symbols.flat();
    if (
      innerSymbols[a] &&
      innerSymbols[a] === innerSymbols[b] &&
      innerSymbols[a] === innerSymbols[c]
    ) {
      alert(innerSymbols[a]);
    }
  }
}

const resetButton = document.getElementsByClassName('reset')[0];
console.log(resetButton);

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  // 4. zresetuj stan gry
  turn = 'x';
  tiles.forEach((tile) => tile.classList.remove('tile-x', 'tile-o'));
  symbols = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
}
resetButton.addEventListener('click', () => {
  reset();
  console.log(symbols);
});
