import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';


export class EventFilter extends Component {
    state = {
        filter: {
            category: '',
            title: '',
            isFree: '',
            thisMonth: '',

        }
        ,
        categories: [
            { name: "sport", className: "fas fa-basketball-ball fa-1x" },
            { name: "outdoors", className: "fas fa-campground  fa-1x" },
            { name: "traveling", className: "fas fa-plane fa-1x" },
            { name: "culinary", className: "fas fa-utensils fa-1x" },
            { name: "gaming", className: "fas fa-gamepad fa-1x" },
            { name: "health", className: "fas fa-heartbeat fa-1x" },
            { name: "Arts & Culture", className: "fas fa-palette fa-1x" },
            { name: "Pets", className: "fas fa-paw fa-1x" },
            { name: "Tech", className: "fas fa-microchip fa-1x" },
            { name: "Family", className: "fas fa-home fa-1x" },
            { name: "Learning", className: "fas fa-graduation-cap fa-1x" },
            { name: "Photography", className: "fas fa-camera-retro fa-1x" },
            { name: "Writing", className: "fas fa-pen-square fa-1x" },
            { name: "Music", className: "fas fa-music fa-1x" },
            { name: "Film", className: "fas fa-film fa-1x" },
            { name: "Dance", className: "fas fa-child fa-1x" },
            { name: "Carrier & Business", className: "fas fa-briefcase fa-1x" },
            { name: "coding", className: "fab fa-connectdevelop fa-1x" }
        ]
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
            <section className="event-filter container">


                <div className="input-filter">
                    <h2>Find your next event</h2>
                    <div className="filter-search">
                        <i className="fas fa-search fa-lg"></i>
                        <input type="text" label="Search..." name="title" value={this.state.title} onChange={this.handleChange} type="search" />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>

                <div className="filters">
                    <div className="category-filter-container">
                        <ul className="default-option">
                          <li>
                              <p>All</p>
                          </li>
                        </ul>
                        <ul className="category-filter" name="category" value={this.state.category} onChange={this.handleChange}>
                            {this.state.categories.map((category, idx) => (
                                <li  value={category.name} key={idx}>
                                    <div className='option'>
                                    <i className={category.className}></i><p>{category.name}</p>
                                    </div>
                                </li>))}
                        </ul>
                    </div>

                    {/* </section> */
                    /* <select className="category-input" name="category" value={this.state.category} onChange={this.handleChange}>
                    <option value="">All</option>
                    <option value="Sport">Sport</option>
                    <option value="Health">Health</option>
                    <option value="Animals">Animals</option>
                </select> */}
                    <div>
                        <h4>Free</h4>
                        <input className="isFree-input" type="checkbox" name="isFree" checked={this.state.isFree} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <h4>Up Coming Month</h4>
                        <input className="thisMonth-input" type="checkbox" name="thisMonth" checked={this.state.thisMonth} onChange={this.handleChange} />
                    </div>
                </div>



            </section>
        )

    }
}
