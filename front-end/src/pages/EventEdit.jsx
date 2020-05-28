import React, { Component } from 'react'
import { connect } from 'react-redux';
import { EventService } from '../services/EventService'
import { loadEvent , saveEvent } from '../store/actions/EventActions'

class _EventEdit extends Component {

    state = {
        event: {
            title: '',
            desc: '',
            category: '',
            price: '',
            createdBy: '',
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
            } catch (err) {
                console.log('eventEdit: cannot load event')
            }
        }
    }

    onHandelChange = async (ev) => {
                    
        const { target } = ev;
        const field = target.name;
        const value = target.value;

        if (field === 'imgUrls') {
            try {
                const savedImgUrl = await EventService.uploadImg(ev);
                this.setState(prevState => ({ event: { ...prevState.event, [field]: [...prevState.event.imgUrls, savedImgUrl] } }))
            } catch (err) {
                console.log('edit cmp: cannot upload img')
            }
        } else
            this.setState(prevState => ({ event: { ...prevState.event, [field]: value } }))

    }


    onHandelSubmit = async (ev) => {
        ev.preventDefault();
        const { event } = this.state;
        try {
            console.log('event edit ' , event)
            await this.props.saveEvent(event);
            this.props.history.push('/')

        } catch(err){
            console.log('eventEdit cmp : cannot save event')
        }

    }

    render() {
        return (
            <div className="edit">
                <h1>Edit Area</h1>
                <form onSubmit={this.onHandelSubmit}>
                    <input autoFocus type="text" maxLength="100" value={Event.title} placeholder="Event name" name="title" onChange={this.onHandelChange} />
                    <input type="date" value={Event.startAt} name="startAt" placeholder="Event start time" onChange={this.onHandelChange} />
                    <input type="text" value={Event.price} name="price" placeholder="Price" onChange={this.onHandelChange} />
                    <input name="category" placeholder="category" onChange={this.onHandelChange} />
                    <input type="text" value={Event.place} name="place" placeholder="Place" onChange={this.onHandelChange} />
                    <input type="text" value={Event.capacity} name="capacity" placeholder="Attendees Limit" onChange={this.onHandelChange} />
                    <input autoFocus type="text" value={Event.desc} name="desc" placeholder="description" onChange={this.onHandelChange} />
                    <input type="file" name="imgUrls" onChange={this.onHandelChange} />
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
    saveEvent,
}

export const EventEdit = connect(mapStateToProps, mapDispatchToProps)(_EventEdit)