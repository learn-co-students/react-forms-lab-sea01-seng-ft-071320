import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({ message: event.target.value })
    // console.log(event.target.value.length);
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.message} />
        <p> remaining characters {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
