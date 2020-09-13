import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
        <p>
          <em>
            Characters remaining:{" "}
            {this.props.maxChars - this.state.message.length}
          </em>
        </p>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}

export default TwitterMessage;
