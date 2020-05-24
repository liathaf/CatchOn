import React, { Component } from 'react'
import {EventService} from '../services/EventService'

export class EventFilter extends React.Component {
    state = {
        filter: {
            category: ''
        }
    }

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }
    
    render() {
        const categories = EventService.getCategories();
        return (
            <React.Fragment>
                <form className="filter-box-events">
                    <input list="categories" name="category"  placeholder="Search" onChange={this.onHandleChange}/>
                <datalist id="categories" className="categories-select">
                    {categories.map((category , idx) => <option key={idx}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>)}
                </datalist>
                </form>
            </React.Fragment >
        )
    }
}