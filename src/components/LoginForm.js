import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            this.state.username.length > 0 &&
            this.state.password.length > 0
          ) {
            this.props.handleLogin(event);
          }
        }}
      >
        <div>
          <label>
            Username
            <input
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}

export default LoginForm;
