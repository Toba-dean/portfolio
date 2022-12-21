import TryAgain from "../../assets/img/try-again.gif";

const GameOverlay = ({ onRestart, board }) => {

  if (board.hasWon()) {
    return (
      <div className="tile2048"></div>
    )
  } else if (board.hasLost()) {
    return (
      <div className="gameOver" onClick={onRestart}>
        <img
          src={TryAgain}
          alt="try again"
          style={{
            width: '100%',
            height: '100%',
            cursor: 'pointer'
          }}
        />
      </div>
    )
  }
}

export default GameOverlay