import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { loadUser } from '../store/actions/UserActions'



class _UserDetails extends Component {

    componentDidMount() {
        const { userId } = this.props.match.params;
        this.props.loadUser(userId);
    }

    render() {
        const { user } = this.props;
        return (
            (user) &&
            <section className="container">
                <div className="profile-grid">
                    <div className="profile-top">
                        <div>
                            <img src={user.imgUrl} />

                            <div className="icons">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube fa-2x"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                        <div className="profile-about">
                            <h1 className="large">{user.fullName}</h1>
                            <p className="lead">{user.job}</p>
                            <p>{user.location}</p>
                            <h2 className="text-primary">{user.fullName} Bio</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                                doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
                                neque modi perspiciatis similique?
                            </p>
                            <div className="line"></div>
                            <h2 className="text-primary">Passions</h2>
                            <div className="passions">
                                <div><i className="fa fa-check"></i> Cooking</div>
                                <div><i className="fa fa-check"></i> Developing</div>
                                <div><i className="fa fa-check"></i> Running</div>
                                <div><i className="fa fa-check"></i> Sky Diving</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-event">
                        <h1>
                            <i className="fas fa-calendar-week"></i> Events
                        </h1>
                        <div className="event">
                            <div>
                                <h4><a href="#" target="_blank"
                                    rel="">Yoga at the beach</a></h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repellat, laborum!
                                </p>
                            </div>
                            <div>
                                <ul>
                                    <li>⭐ ⭐ ⭐ ⭐</li>
                                    <li>Attends: 25</li>
                                </ul>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="event">
                            <div>
                                <h4><a href="#" target="_blank"
                                    rel="">Eating with gumball</a></h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repellat, laborum!
                    </p>
                            </div>
                            <div>
                                <ul>
                                    <li>⭐ ⭐ ⭐ ⭐ ⭐</li>
                                    <li>Attends: 25</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users.currUser,
        user: state.users.loggedInUser
    }
}

const mapDispatchToProps = {
    loadUser
}

export const UserDetails = connect(mapStateToProps, mapDispatchToProps)(_UserDetails)