import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { EventList } from '../cmps/EventList';
import { EventFilter } from '../cmps/EventFilter';
import { loadEvents } from '../store/actions/EventActions';

class _Events extends Component {
  state = {
    filterBy: null,
    sortBy: null,
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents() {
    this.props.loadEvents(this.state.filterBy, this.state.sortBy);
  }

  onDelete = (id) => {
    this.props.removeEvent(id);
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, () => {
      this.loadEvents();
    });
  };
  onSort = (sortBy) => {
    this.setState({ sortBy }, this.loadToys);
  };

  render() {

    return (
      <div className="events-prev">
        <EventFilter onSetFilter={this.onSetFilter} onSort={this.onSort} />
        <EventList events={this.props.events} onDelete={this.onDelete} />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events
  };
};

const mapDispatchToProps = {
  loadEvents,
  removeEvent
};

export const Events = connect(mapStateToProps, mapDispatchToProps)(_Events);
