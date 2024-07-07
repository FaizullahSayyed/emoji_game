import './index.css'

const emojiCard = props => {
  const {emojiDetails, onClickFunction} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickEmoji = () => onClickFunction(id)

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default emojiCard
