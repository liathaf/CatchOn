import React, { Component } from 'react'

import { ReviewList } from '../cmps/ReviewList'
import avatar from '../img/avatar.jpg'


export class Review extends Component {

    state = {
        msg: '',

    }


    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({ [field]: value })
    }



    onHandelSubmit = (ev) => {

        ev.preventDefault();
        const { msg } = this.state;
        this.props.onAddReview(msg);

    }

    render() {
        const { reviews , user } = this.props
        return (
            <>
                <section className="reviews">
                    <form className="review-form" autoComplete="off" onSubmit={this.onHandelSubmit}>
                        <img src={(user)? user.imgUrl : avatar}></img>
                        <input name="msg" placeholder="write massege..." onChange={this.onHandleChange}></input>
                        <button className="btn" onClick={this.onHandelSubmit}>Comment</button>
                    </form>
                    <ReviewList reviews={reviews} />

                </section>
            </>
        )
    }

}




