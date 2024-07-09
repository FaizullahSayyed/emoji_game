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
<<<<<<< HEAD
    winning: true,
    win: false,
=======
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateScore = () => {
<<<<<<< HEAD
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
=======
    this.setState(prevState => ({score: prevState.clickedEmojisIdList.length}))
  }

  updateTopScore = score => this.setState({topScore: score})

  resetScore = () => this.setState({score: 0})
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c

  updateClickedEmojisList = id => {
    this.setState(prevState => ({
      clickedEmojisIdList: [...prevState.clickedEmojisIdList, id],
    }))
  }

  onClickFunction = id => {
<<<<<<< HEAD
    const {clickedEmojisIdList, score} = this.state
    if (clickedEmojisIdList.includes(id) || score === 11) {
      this.setState({
        winning: false,
        win: score === 11,
=======
    const {clickedEmojisIdList} = this.state
    if (clickedEmojisIdList.includes(id)) {
      this.setState({
        score: 0,
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c
      })
    } else {
      this.updateScore()
      this.updateClickedEmojisList(id)
    }
  }

  render() {
<<<<<<< HEAD
    const {score, topScore, winning, win} = this.state
=======
    const {score, topScore} = this.state
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="nav-bar-container">
<<<<<<< HEAD
            <NavBar score={score} topScore={topScore} winning={winning} />
            {winning ? (
=======
            <NavBar score={score} topScore={topScore} />
            {score < 12 ? (
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c
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
<<<<<<< HEAD
                resetGame={this.resetGame}
                win={win}
=======
                updateTopScore={this.updateTopScore}
                resetScore={this.resetScore}
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
