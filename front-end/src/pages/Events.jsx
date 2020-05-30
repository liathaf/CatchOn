import React, { Component } from 'react'
import { connect } from 'react-redux';


import { EventList } from '../cmps/EventList'
import { EventFilter } from '../cmps/EventFilter'
import { loadEvents, removeEvent } from '../store/actions/EventActions';

class _Events extends Component {

  state = {
    filterBy: null

  }

  componentDidMount() {
      const { search } = this.props.match.params
      const filterBy = this.checkCriteria(search);
      this.props.loadEvents(filterBy);
  }


  onSetFilter = (filterBy) => {

    this.setState({ filterBy }, () => {
      this.props.loadEvents(filterBy);
    })

  }


  checkCriteria = (search) => {
    
    var filterBy = {}
    const type = search.slice(0, 1)
    if (type === 's') {
      const valueToSearch = search.slice(7, search.length)
      filterBy = { title: valueToSearch }
    }
    if (type === 'c') {
      const valueToSearch = search.slice(9, search.length)
      filterBy = { category: valueToSearch }
    }
    return filterBy;

  }

  render() {

    const { events } = this.props
    return (
      <div className="events">

        <div className="filter">
          <EventFilter onSetFilter={this.onSetFilter} />
        </div>

        <div className="events-prev">
          <EventList events={events} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events
  }
}
const mapDispatchToProps = {
  loadEvents,
  removeEvent

}
export const Events = connect(mapStateToProps, mapDispatchToProps)(_Events)


