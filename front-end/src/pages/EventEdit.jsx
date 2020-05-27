import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { EventService } from '../services/EventService';
import { loadEvent } from '../store/actions/EventActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@material-ui/core/TextField';

class _EventEdit extends Component {
  state = {
    event: {
      title: '',
      desc: '',
      category: '',
      price: '',
      createdBy: '',
      createdAt: '',
      startAt: new Date(),
      place: '',
      capacity: '',
      imgUrls: [],
    },
  };

  async componentDidMount() {
    const eventId = this.props.match.params.eventId;

    if (eventId) {
      try {
        const event = await this.props.loadEvent();
        this.setState({ event });
      } catch (err) {
        console.log('eventEdit: cannot load event');
      }
=======
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

<<<<<<< HEAD
        if (field === 'imgUrls') {
            try {
                const savedImgUrl = await EventService.uploadImg(ev);
                this.setState(prevState => ({ event: { ...prevState.event, [field]: [...prevState.event.imgUrls, savedImgUrl] } }))
=======
                    <label> Description: </label>
                    <input  type="text" value={Event.desc} onChange={this.handleInput} name="desc" />
>>>>>>> b4a58757be84aa4118d4a426ea8ff459ab01e5a3

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
>>>>>>> 9b3c3d09add38a8192628057480adb99110bcbe6
    }
  }

  onHandleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value });
  };

  handleDate = (date) => {
    this.setState((prevState) => ({
      event: { ...prevState.event, startAt: date },
    }));
    console.log(this.state);
  };

  onSaveEvent = (ev) => {
    ev.preventDefault();
    EventService.save(this.state.event)
      .then((savedEvent) => {
        this.props.history.push('/');
      })
      .catch((err) => {
        alert('Ops somthing went wrong');
      });
  };

  render() {
    return (
      <div className="edit">
        <h2>Edit Area</h2>
        <form onSubmit={this.onSaveEvent}>
          <TextField
            className="edit-input"
            size="small"
            label="Title"
            autoFocus
            type="text"
            placeholder="Title"
            maxLength="100"
            value={Event.title}
            onChange={this.onHandleChange}
            name="title"
            variant="outlined"
          />
          <TextField
          className="edit-input"
            size="small"
            label="Description"
            value={Event.desc}
            onChange={this.onHandleChange}
            name="desc"
            type="text"
            placeholder="Description"
            variant="outlined"
          />
          <TextField
          className="edit-input"
            size="small"
            label="Price"
            type="text"
            placeholder="Price"
            value={Event.price}
            onChange={this.onHandleChange}
            name="price"
            variant="outlined"
          />
          <TextField
          className="edit-input"
            size="small"
            label="Address"
            type="text"
            placeholder="Address"
            value={Event.place}
            onChange={this.onHandleChange}
            name="place"
            variant="outlined"
          />
          <TextField
          className="edit-input"
            size="small"
            label="Capacity"
            type="text"
            placeholder="Capacity"
            value={Event.capacity}
            onChange={this.onHandleChange}
            name="capacity"
            variant="outlined"
          />

          <DatePicker
            selected={this.state.event.startAt}
            className="date"
            showTimeSelect
            dateFormat="Pp"
            onChange={this.handleDate}
            name="startAt"
          />

          <select
            className="category-input"
            name="category"
            value={Event.category}
            onChange={this.onHandleChange}
          >
            <option value="">Category</option>
            <option value="Sport">Sport</option>
            <option value="Health">Health</option>
            <option value="Animals">Animals</option>
          </select>

          <input
          className="img-input"
            type="file"
            onChange={this.onHandleChange}
            name="imgUrls"
          />

          <button className="save">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.events.currEvent,
  };
};

const mapDispatchToProps = {
<<<<<<< HEAD
  loadEvent,
};
=======
    loadEvent,
    saveEvent,
}
>>>>>>> 9b3c3d09add38a8192628057480adb99110bcbe6

export const EventEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(_EventEdit);
