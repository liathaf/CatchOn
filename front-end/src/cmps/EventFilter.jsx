import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
                     
                <FormControl>
        <InputLabel id="demo-simple-select-label">All</InputLabel>
        <Select 
            className="type-input"
             name="category"
          value={this.state.category}
          onChange={this.handleChange}
        >
          <MenuItem value="Sport">Sport</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          <MenuItem value="Animals">Animals</MenuItem>
        </Select>
      </FormControl>

                </div>
                <div className="row filters">
                <div>
             
                  
                    {/* <select className="type-input" name="category" value={this.state.category} onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="Sport">Sport</option>
                        <option value="Health">Health</option>
                        <option value="Animals">Animals</option>
                    </select> */}
           
                </div>
                <div>
                <label>
                    Free:
                        <input className="isFree-input" type="checkbox" name="isFree" checked={this.state.isFree} onChange={this.handleChange} />

                </label>
                <label>
                    This Month:
                        <input className="thisMonth-input" type="checkbox" name="thisMonth" checked={this.state.thisMonth} onChange={this.handleChange} />

                </label>
                </div>
                </div>
               
               

            </section>
        )

    }
}
