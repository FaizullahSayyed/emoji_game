import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, winning, updateTopScore, resetScore} = props

  if (score > topScore) {
    updateTopScore(score)
  }

  if (!winning) {
    resetScore()
  }

  return score === 12 ? (
    <div className="win-card">win</div>
  ) : (
    <div className="lose-card">lose</div>
  )
}

export default WinOrLoseCard
