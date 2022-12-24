import { useState } from "react";

import "./styles/game.scss";
import "./styles/main.scss";
import "./styles/styles.scss";
import { Board } from "../../helper";
import useEvent from "../../hooks/useEvent";
import { Cell, Tile, GameOverlay } from "../../component";

const Game = () => {

  const [board, setBoard] = useState(new Board());

  const handleKeyDown = e => {
    if (board.hasWon()) {
      return;
    }
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      let direction = e.keyCode - 37;
      let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board)
      let newBoard = boardClone.move(direction)
      setBoard(newBoard)
    }
  }

  useEvent('keydown', handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => (
    <div key={rowIndex}>
      {
        row.map((col, colIndex) => (
          <Cell key={rowIndex * board.size + colIndex} />
        ))
      }
    </div>
  ))

  const tile = board.tiles
    .filter(tile => tile.value !== 0)
    .map((tile, idx) => (
      <Tile tile={tile} key={idx} />
    ))

  const resetGame = () => {
    setBoard(new Board())
  }

  return (
    <div className="game">
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>new game</div>

        <div className="score-box">
          <div className="score-header">SCORE</div>

          <div>{board.score}</div>
        </div>
      </div>

      <div className="board">
        {cells}
        {tile}

        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  )
}

export default Game