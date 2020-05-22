import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import TextField from './TextField';
import { validateInput } from '../validations/login';
import { login } from '../store/actions/UserActions';

class LoginForm extends Component {
  state = {
    identifier: '',
    password: '',
    errors: {},
    isLoading: false,
  };

  componentDidMount() {
    console.log(this.props.login)
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state)
        .then(
        (res) => this.props.history.push('/'),
        (err) => alert('Not user ready yet')
        // (err) => this.setState({ errors: err.data.errors, isLoading: false })
      );
    }
  };
  onChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>

         <div className="continue-with-facebook">
           <a href="#">
             <i className="fab fa-facebook-square"></i>
           <p>Continue with Facebook</p>
           </a>
           </div>

           <div className="continue-with-google">
           <a href="#">
             <i className="fab fa-google"></i>
           <p>Continue with Google</p>
           </a>
           </div>

           <div className="continue-with-apple">
           <a href="#">
             <i className="fab fa-apple"></i>
           <p>Continue with Apple</p>
           </a>
           </div>

           <div className="login-or"><span>OR</span></div>

          <TextField
            field="identifier"
            label="Username"
            value={this.state.identifier}
            error={this.state.errors.identifier}
            onChange={this.onChange}
          />

          <TextField
            field="password"
            label="Password"
            value={this.state.password}
            error={this.state.errors.password}
            onChange={this.onChange}
          />
          <div className="form">
            <button className="loginBtn" disabled={this.state.isLoading}>
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));