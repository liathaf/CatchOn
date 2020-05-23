import React, { Component } from 'react'
import {EventService} from '../services/EventService'

export class EventFilter extends React.Component {
    state = {
        filter: {
            categories: ''
        }
    }

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.type;

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }
    render() {
        const categories = EventService.getCategories();
        return (
            <React.Fragment>
                <form className="filter-box-events" onSubmit={this.onFilter}>
                    <input list="categories" name="categories"  placeholder="Search"/>
                <datalist id="categories" className="categories-select">
                    {categories.map(category => <option value={category.charAt(0).toUpperCase() + category.slice(1)}></option>)}
                </datalist>
                </form>
            </React.Fragment >
        )
    }
}