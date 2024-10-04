import React, { useState, useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(null); 
  const [gameStarted, setGameStarted] = useState(false); 
  const [tossDone, setTossDone] = useState(false); 
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (!gameStarted || board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const performToss = () => {
    const tossResult = Math.random() < 0.5 ? 'X' : 'O';
    setXIsNext(tossResult === 'X'); 
    setTossDone(true);
    toast.info(`🎲 Toss won by: ${tossResult}!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setGameStarted(true); 
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameStarted(false); 
    setTossDone(false); 
    setXIsNext(null); 
  };

  const renderSquare = (index) => {
    return (
      <button
        className={`square ${board[index] === 'X' ? 'x' : board[index] === 'O' ? 'o' : ''}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  useEffect(() => {
    if (winner) {
      toast.success(`🎉 Winner: ${winner}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        onClose: resetGame, 
      });
    } else if (!board.includes(null) && gameStarted) {
      toast.info("🤝 It's a Draw!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        onClose: resetGame, 
      });
    }
  }, [winner, board, gameStarted]);

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>

      {!tossDone && (
        <button className="toss-btn" onClick={performToss}>
          Start Toss
        </button>
      )}

      {gameStarted && (
        <>
          <div className="board">
            {board.map((square, index) => renderSquare(index))}
          </div>
          <div className="status" >
            {winner
              ? `Winner: ${winner}`
              : board.includes(null)
              ? `Next Player: ${xIsNext ? 'X' : 'O'}`
              : "It's a Draw!"}
          </div>
        </>
      )}

      {tossDone && (
        <button className="reset-btn" onClick={resetGame}>
          Restart Game
        </button>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

const calculateWinner = (board) => {
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
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default App;
