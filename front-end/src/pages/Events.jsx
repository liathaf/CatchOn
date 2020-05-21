import React, { Component } from 'react'
import { connect } from 'react-redux';
import { EventService } from '../services/EventService'

class EventsPage extends Component {

    state = {
        currCategory: '',
        filterBy: ''
    }

    componentDidMount() {
        this.setState({currCategory: this.props.match.params.category})
    }

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({ [field]: value } , ()=>(console.log(this.state)))
    }

    render() {
    
        
        return (
            
            <div className="events-page">
                <h1>{this.props.match.params.category}</h1>
                {this.state.currCategory ? <img src={EventService.setCategoryBackground(this.state.currCategory)}/> : "Loading..."} 

            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
  
}

export const Events = connect(mapStateToProps, mapDispatchToProps)(EventsPage)