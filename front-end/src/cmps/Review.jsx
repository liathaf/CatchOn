import React, { Component } from 'react'

import { ReviewList } from '../cmps/ReviewList'

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
        const { reviews } = this.props
        return (
            <>
                <section className="reviews">
                    <form className="review-input" onSubmit={this.onHandelSubmit}>
                        <input className="review-input" name="msg" placeholder="write massege..." onChange={this.onHandleChange}></input>
                        <button className="send-msg-btn">Send</button>
                    </form>
                    <ReviewList reviews={reviews} />

                </section>
            </>
        )
    }

}

