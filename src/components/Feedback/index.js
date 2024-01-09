import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}
  clickEmoji = () => {
    this.setState(select => ({
      isFeedbackSelected: !select.isFeedbackSelected,
    }))
  }
  render() {
    const {resources} = this.props
    const {isFeedbackSelected} = this.state
    return (
      <div className="feedback-main-container">
        { isFeedbackSelected ? 
        <div className="thankyou-container">
          <img src={resources.loveEmojiUrl} className="thnakyou-image" />
          <h1 className="thankyou-heading"> Thank You! </h1>
          <p className="thankyou-para">
            {' '}
            we Run the below command in your IDE to publish the code{' '}
          </p>
        </div>
        :
        <div className="feedback-container">
          <h1 className="feedback-heading">
            {' '}
            How you are statisfied are you with your customer support
            performance ?{' '}
          </h1>
          <ul className="feedback-emoji-container">
            {resources.emojis.map(eachEmoji => (
              <li>
                <img
                  src={eachEmoji.imageUrl}
                  className="emoji"
                  onClick={this.clickEmoji}
                />
                <p className="para"> {eachEmoji.name} </p>
              </li>
            ))}
          </ul>
        </div> 
        }
      </div>
    )
  }
}

export default Feedback
