import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EventService } from '../services/EventService';
import { loadEvent, saveEvent } from '../store/actions/EventActions';
import { updateUser } from '../store/actions/UserActions';
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
      startAt: new Date(),
      place: '',
      capacity: '',
      imgUrls: [],
    },
    msg: '',
    amptyInputClass: '',
  };



  async componentDidMount() {

    onHandelChange = async (ev) => {

      const { target } = ev;
      const field = target.name;
      const value = target.value;

      if (field === 'imgUrls') {
        try {
          const savedImgUrl = await EventService.uploadImg(ev);
          this.setState(prevState => ({ event: { ...prevState.event, imgUrls: [...prevState.event.imgUrls, savedImgUrl] } }))
        } catch (err) {
          console.log('edit cmp: cannot upload img')
        }
      } else
        this.setState(prevState => ({ event: { ...prevState.event, [field]: value } }))

      if (eventId) {
        try {
          const event = await this.props.loadEvent()
          this.setState({ event })
        } catch (err) {
          console.log('eventEdit: cannot load event')
        }
      }
    }
  }

    onHandleDate = (date) => {
      this.setState(prevState => ({ event: { ...prevState.event, startAt: date } }))

    }


    onHandelSubmit = async (ev) => {
      ev.preventDefault();
      const { event } = this.state;
      const { user } = this.props;
      if (!user) return

      if (!event.title || !event.place) {
        this.setState({ msg: 'Please fill the required fields!', amptyInputClass: 'amptyInput' });
        return;
      }
      user.createdEvents.push({
        _id: event._id,
        title: event.title,
        imgUrl: event.imgUrls[0]
      });
      try {
        await this.props.saveEvent(event);
        await this.props.updateUser(user)
        this.props.history.push('/')

      } catch (err) {
        console.log('eventEdit cmp : cannot save event')
      }
    }

      onHandelSubmit = async (ev) => {
        ev.preventDefault();
        const { event } = this.state;
        try {
          console.log('event edit ', event)
          await this.props.saveEvent(event);
          this.props.history.push('/')

        } catch (err) {
          console.log('eventEdit cmp : cannot save event')
        }

      }

      onHandelFocus = () => {
        this.setState({ amptyInputClass: '' });
      }


      handleDate = (date) => {
        this.setState((prevState) => ({
          event: { ...prevState.event, startAt: date },
        }));
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

              <div className="double-box">

                <div className="box">
                  <input type="text" name="" required value={Event.title}
                    onChange={this.onHandleChange}></input>
                  <label>Title</label>
                </div>

                <div className="box">
                  <input type="text" name="" required value={Event.price}
                    onChange={this.onHandleChange}></input>
                  <label>Price</label>
                </div>

              </div>

              <div className="double-box">

                <div className="box">
                  <input type="text" name="" required value={Event.place}
                    onChange={this.onHandleChange}></input>
                  <label>Address</label>
                </div>

                <div className="box">
                  <input type="text" name="" required value={Event.capacity}
                    onChange={this.onHandleChange}></input>
                  <label>Capacity</label>
                </div>
              </div>

              <div className="box">
                <input type="text" name="" required value={Event.desc}
                  onChange={this.onHandleChange}></input>
                <label>Description</label>
              </div>
              <div className='bottom-edit'>
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
              </div>


              <button className="save btn">Save</button>
            </form>
          </div>
        );
      }
    }

    const mapStateToProps = (state) => {
      return {
        event: state.events.currEvent,
        user: state.users.loggedInUser,
      };
    };

    const mapDispatchToProps = {
      loadEvent,
      saveEvent,
      updateUser
    }

    export const EventEdit = connect(mapStateToProps, mapDispatchToProps)(_EventEdit);
