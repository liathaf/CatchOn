import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import avatar from '../img/avatar.jpg'
import logo from '../../src/img/logo-stright.png'
import { logout } from '../store/actions/UserActions'

export class _NavBar extends Component {

    state = {
        currentScrollHeight: 0
    }

    componentDidMount() {

        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (this.state.currentScrollHeight !== newScrollHeight) {
                this.setState({ currentScrollHeight: newScrollHeight })
            }
        }

    };

    onLogout = async () => {

        await this.props.logout();
        this.props.history.push('/')
    }

    render() {
        const opacity = Math.min(this.state.currentScrollHeight / 100, 1)
        const navBgc = `rgb(247, 255, 255,${opacity})`
        const border = `rgb(229, 229, 229,${opacity})`
        const { user } = this.props

        return (
            <nav className="navbar" style={{ backgroundColor: navBgc, borderBottom: `1px solid ${border}` }}>
                <div className="navbar-content container">
                    <Link className="logo" to="/"><img src={logo}></img></Link>
                    <ul className="links">
                        <li><Link to="/edit">Create Event</Link></li>
                        {(!user) &&
                            <>
                                <li><Link to="/signup">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </>}
                        {(user) &&
                            <>
                                <li className="login" onClick={this.onLogout}>Logout</li>
                                <img className="userImg-preview" src={(user.imgUrl) ? user.imgUrl : avatar} />
                            </>
                        }

                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users.loggedInUser,
    };
};

const mapDispatchToProps = {
    logout
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(withRouter(_NavBar));











