import './index.css'

const NavBar = props => {
<<<<<<< HEAD
  const {score, topScore, winning} = props
=======
  const {score, topScore} = props
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c

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

<<<<<<< HEAD
          <h1 className="game-name">Emoji Game</h1>
        </div>
      </div>
      {winning && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
=======
          <p className="game-name">Emoji Game</p>
        </div>
      </div>
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c
    </div>
  )
}

export default NavBar
