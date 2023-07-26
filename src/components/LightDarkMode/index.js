// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  changeMode = () => {
    const {isClicked} = this.state
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="container">
        {isClicked ? (
          <div className="card-white-mode">
            <h1 className="heading-white-mode">Click To Change</h1>
            <button className="button" onClick={this.changeMode}>
              Dark Mode
            </button>
          </div>
        ) : (
          <div className="card-black-mode">
            <h1 className="heading-black-mode">Click To Change</h1>
            <button className="button" onClick={this.changeMode}>
              Light Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
