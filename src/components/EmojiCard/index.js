import './index.css'

const emojiCard = props => {
  const {emojiDetails, onClickFunction} = props
  const {id, emojiUrl, emojiName} = emojiDetails

<<<<<<< HEAD
  const onClickEmoji = () => onClickFunction(id)
=======
  const onClickEmoji = () => {
    onClickFunction(id)
  }
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
<<<<<<< HEAD
=======
        <p>{id}</p>
>>>>>>> c1d53d5d0a89806364ba999298080a557c429e3c
      </button>
    </li>
  )
}

export default emojiCard
