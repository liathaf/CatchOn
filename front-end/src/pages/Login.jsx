import React, { Component } from 'react'
import { connect  } from 'react-redux'
import  LoginForm  from '../cmps/LoginFrom'

class _Login extends Component {

    render() {
        return (
            <div >
                <div className="loginForm">
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
  
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)