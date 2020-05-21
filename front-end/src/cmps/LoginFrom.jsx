import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from './TextField';
import { validateInput } from '../validations/login';
import { login } from '../store/actions/userActions';

class LoginForm extends Component {
  state = {
    identifier: '',
    password: '',
    errors: {},
    isLoading: false,
  };

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
              Login
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

export default connect(null, mapDispatchToProps)(LoginForm);