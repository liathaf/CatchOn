import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


import { login } from '../store/actions/UserActions'


class _Login extends Component {


  state = {
    user: {
      email: '',
      password: '',
    },
    msg: ''
  }

  onHandelChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState(prevState => ({ user: { ...prevState.user, [field]: value } }));

  }


  onHandelSubmit = async (ev) => {
    ev.preventDefault();
    const userCreds = this.state.user;
    try {
      
      await this.props.login(userCreds);
      this.props.history.push('/');

    } catch (err) {
      this.setState(prevState => ({ user: { ...prevState.user, email: '', password: '' } }))
      this.setState({ msg: err.response.data.error });
    }

  }

  render() {
    
    return (
      <div className="loginForm">
        <form onSubmit={this.onHandelSubmit}>
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

          <input type="text" name="email" onChange={this.onHandelChange} className="login-input" placeholder="Email" />
          <input type="password" name="password" onChange={this.onHandelChange} className="login-input" placeholder="password" />
          <div className="form">
            <p style={{ color: "red", fontSize: "0.8rem" }}>{this.state.msg}</p>
            <button className="loginBtn">Continue</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login,
}

export const Login = connect(null, mapDispatchToProps)(withRouter(_Login));