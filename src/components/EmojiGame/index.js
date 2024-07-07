/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisIdList: [],
    winning: true,
    win: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
  }

  resetGame = score => {
    const {topScore} = this.state
    this.setState({
      score: 0,
      clickedEmojisIdList: [],
      topScore: score > topScore ? score : topScore,
      winning: true,
      win: false,
    })
  }

  updateClickedEmojisList = id => {
    this.setState(prevState => ({
      clickedEmojisIdList: [...prevState.clickedEmojisIdList, id],
    }))
  }

  onClickFunction = id => {
    const {clickedEmojisIdList, score} = this.state
    if (clickedEmojisIdList.includes(id) || score === 11) {
      this.setState({
        winning: false,
        win: score === 11,
      })
    } else {
      this.updateScore()
      this.updateClickedEmojisList(id)
    }
  }

  render() {
    const {score, topScore, winning, win} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="nav-bar-container">
            <NavBar score={score} topScore={topScore} winning={winning} />
            {winning ? (
              <ul className="emoji-card-container">
                {this.shuffledEmojisList().map(eachEmoji => (
                  <EmojiCard
                    key={eachEmoji.id}
                    emojiDetails={eachEmoji}
                    onClickFunction={this.onClickFunction}
                  />
                ))}
              </ul>
            ) : (
              <WinOrLoseCard
                score={score}
                resetGame={this.resetGame}
                win={win}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
