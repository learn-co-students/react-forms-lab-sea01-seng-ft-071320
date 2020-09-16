import React from "react";

class TwitterMessage extends React.Component {
constructor() {

  super()
  this.state = {
    tweet: ''
  }
};

  onChangeHandler = (event) => {
    this.setState({tweet: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.onChangeHandler} value={this.state.tweet}/><br></br>
        Characters Left:{this.props.maxChars - this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
