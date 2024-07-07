import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, resetGame, updateTopScore, win} = props

  if (score > topScore) {
    updateTopScore(score)
  }

  const onClickFunction = () => resetGame(score)

  return win ? (
    <div className="win-lose-outer-container">
      <div className="won-lose-card">
        <div className="win-lose-score-container">
          <h1 className="won-heading">You Won</h1>
          <div className="won-score-container">
            <p className="score-paragraph">Best Score</p>
            <p className="won-score">12/12</p>
          </div>
          <button
            type="button"
            onClick={onClickFunction}
            className="win-lose-button"
          >
            Play Again
          </button>
        </div>
        <div className="won-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            className="won-image"
            alt="win or lose"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="win-lose-outer-container">
      <div className="won-lose-card">
        <div className="win-lose-score-container">
          <h1 className="won-heading">You Lose</h1>
          <div className="won-score-container">
            <p className="score-paragraph">Score</p>
            <p className="won-score">{score}/12</p>
          </div>
          <button
            type="button"
            onClick={onClickFunction}
            className="win-lose-button"
          >
            Play Again
          </button>
        </div>
        <div className="won-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            className="win-or-lose"
            alt="win or lose"
          />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
