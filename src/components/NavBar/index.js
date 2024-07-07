import './index.css'

const NavBar = props => {
  const {score, topScore, winning} = props

  return (
    <div className="nav-bar">
      <div className="game-name-container">
        <div className="emoji-game-name-image-container">
          <div className="emoji-game-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="emoji-image"
            />
          </div>

          <h1 className="game-name">Emoji Game</h1>
        </div>
      </div>
      {winning && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
