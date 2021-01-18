import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    // uncontrolled component form handling
    // hamdle by DOM
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();

    // controlled component form handling
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("this.emailInputRef ", this.emailInputRef);
    // console.log("this.passwordInputRef ", this.passwordInputRef);

    console.log(this.state);
  };

  handleEmailChange = (e) => {
    // this.email = e.target.value;
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    // this.password = e.target.value;
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
            required
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
