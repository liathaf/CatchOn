import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';


export class EventFilter extends Component {
    state = {
        filter: {
            category: '',
            title: '',
            isFree: '',
            thisMonth: '',

        }
        
    }

    handleChange = (ev) => {
        let { name, value } = ev.target;
        value = ev.target.type === 'number' ? parseInt(value) : value;
        value = ev.target.type === 'checkbox' ? ev.target.checked : value;
        this.setState(prevState => ({ filter: { ...prevState.filter, [name]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })

    }



    render() {
        return (
            <section className="event-filter">
                <div className="row">
                <h2>Find your next event</h2>

                </div>
                <div className="row">

                <TextField autoFocus className="search-input" label="Search..." name="title" value={this.state.title} onChange={this.handleChange}  type="search" variant="outlined" />
                     

                </div>
                <div className="row filters">
               
     
                  
                    <select className="category-input" name="category" value={this.state.category} onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="Sport">Sport</option>
                        <option value="Health">Health</option>
                        <option value="Animals">Animals</option>
                    </select>
           
              
             
                <label>

                Free
          <Checkbox
          name="isFree"
            checked={this.state.isFree}
            onChange={this.handleChange}
            color="primary"
          />
   
            
                        {/* <input className="isFree-input" type="checkbox" name="isFree" checked={this.state.isFree} onChange={this.handleChange} /> */}

                </label>
                <label>

                Up Coming Month
          <Checkbox
          name="thisMonth"
            checked={this.state.thisMonth}
            onChange={this.handleChange}
            color="primary"
          />
                   
                        {/* <input className="thisMonth-input" type="checkbox" name="thisMonth" checked={this.state.thisMonth} onChange={this.handleChange} /> */}

                </label>
           
                </div>
               
               

            </section>
        )

    }
}
