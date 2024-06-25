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
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateScore = () => {
    this.setState(prevState => ({score: prevState.clickedEmojisIdList.length}))
  }

  updateTopScore = score => this.setState({topScore: score})

  resetScore = () => this.setState({score: 0})

  updateClickedEmojisList = id => {
    this.setState(prevState => ({
      clickedEmojisIdList: [...prevState.clickedEmojisIdList, id],
    }))
  }

  onClickFunction = id => {
    const {clickedEmojisIdList} = this.state
    if (clickedEmojisIdList.includes(id)) {
      this.setState({
        score: 0,
      })
    } else {
      this.updateScore()
      this.updateClickedEmojisList(id)
    }
  }

  render() {
    const {score, topScore} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="nav-bar-container">
            <NavBar score={score} topScore={topScore} />
            {score < 12 ? (
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
                updateTopScore={this.updateTopScore}
                resetScore={this.resetScore}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
