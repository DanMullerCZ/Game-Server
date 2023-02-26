let board = ['', '', '', '', '', '', '', '', '']; // represents the state of the game board
let currentPlayer = 'X'; // X always goes first
let gameStatus = ''; // "" - game in progress, "Tie", "X wins", "O wins"
const statusDisplay = document.querySelector('#status'); // element to display game status
const restartButton = document.querySelector('#restart-button');
const cells = document.querySelectorAll('td');

function handleCellPlayed(clickedCell, clickedCellIndex) {
  board[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.innerHTML = currentPlayer + '\'s turn';
}

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 6; i += 3) {
    if (board[i] !== '' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      roundWon = true;
      break;
    }
  }
  for (let i = 0; i <= 2; i++) {
    if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      roundWon = true;
      break;
    }
  }
  if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    roundWon = true;
  }
  if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    roundWon = true;
  }
  if (roundWon) {
    gameStatus = currentPlayer === 'X' ? 'X wins' : 'O wins';
    statusDisplay.innerHTML = gameStatus;
    return;
  }
  const roundTie = !board.includes('');
  if (roundTie) {
    gameStatus = 'Tie';
    statusDisplay.innerHTML = gameStatus;
    return;
  }
  handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('id'));
  if (board[clickedCellIndex] !== '' || gameStatus !== '') {
    return;
  }
  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleRestartGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameStatus = '';
  statusDisplay.innerHTML = currentPlayer + '\'s turn';
  cells.forEach((cell) => cell.innerHTML = '');
}

cells.forEach((cell) => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', handleRestartGame);
