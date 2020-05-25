import React, { Component } from 'react'


export class EventFilter extends React.Component {
    state = {
        filter: {
            
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
      
        return (
            <React.Fragment>
                <form className="filter-box-events">
                    <input type="text" name=""  placeholder="Search" onChange={this.onHandleChange}/>
                <datalist  className="categories-select">
     
                </datalist>
                </form>
            </React.Fragment >
        )
    }
}