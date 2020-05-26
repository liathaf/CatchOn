import React, { Component } from 'react'
import { connect } from 'react-redux';
import { EventService } from '../services/EventService'
import { loadEvent } from '../store/actions/EventActions'

class _EventEdit extends Component {

    state = {
        event: {
            title: '',
            desc: '',
            category: '',
            price: '',
            createdBy: '',
            createdAt: '',
            startAt: '',
            place: '',
            capacity: '',
            imgUrls: []
        }
    }

    async componentDidMount() {

        const eventId = this.props.match.params.eventId

        if (eventId) {
            try {
                const event = await this.props.loadEvent()
                this.setState({ event })
            } catch(err) {
                console.log('eventEdit: cannot load event')
            }
        }
    }

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({ [field]: value })
    }

    onSaveEvent = (ev) => {
        ev.preventDefault()
        EventService.save(this.state.event)
            .then(savedEvent => {
                this.props.history.push('/')
            })
            .catch(err => {
                alert('Ops somthing went wrong')
            })
    }


    render() {
        return (
            <div className="edit">
                <h1>Edit Area</h1>
                <form onSubmit={this.onSaveEvent}>

                    <label> Title: </label>
                    <input autoFocus type="text" maxLength="100" value={Event.title} onChange={this.handleInput} name="title" />

                    <label> Description: </label>
                    <input  type="text" value={Event.desc} onChange={this.handleInput} name="desc" />

                    <label> Category: </label>
                    <input type="text" value={Event.category} onChange={this.handleInput} name="category" />

                    <label> Price: </label>
                    <input type="text" value={Event.price} onChange={this.handleInput} name="price" />

                    <label> Event Date: </label>
                    <input type="text" value={Event.startAt} onChange={this.handleInput} name="startAt" />

                    <label> Place: </label>
                    <input type="text" value={Event.place} onChange={this.handleInput} name="place" />

                    <label> Capacity: </label>
                    <input type="text" value={Event.capacity} onChange={this.handleInput} name="capacity" />

                    <label> Upload Images: </label>
                    <input type="file" onChange={this.handleInput} name="imgUrls" />

                    <button>Save</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        event: state.events.currEvent,
    }
}

const mapDispatchToProps = {
    loadEvent,
}

export const EventEdit = connect(mapStateToProps, mapDispatchToProps)(_EventEdit)