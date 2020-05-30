import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField';

export class EventFilter extends Component {
    state = {
        filter: {
            category: '',
            title: '',
            isFree: false,
            thisMonth: false,
        },
        categories: [
            { name: "Sport", className: "fas fa-basketball-ball fa-1x" },
            { name: "Outdoors", className: "fas fa-campground  fa-1x" },
            { name: "Traveling", className: "fas fa-plane fa-1x" },
            { name: "Culinary", className: "fas fa-utensils fa-1x" },
            { name: "Gaming", className: "fas fa-gamepad fa-1x" },
            { name: "Health", className: "fas fa-heartbeat fa-1x" },
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
            { name: "Coding", className: "fab fa-connectdevelop fa-1x" }
        ],
        toggleClass: 'category-filter-container'
    }

    componentDidMount() {
        const filterName = this.props.filter
        this.setState(prevState => ({ filter: { ...prevState.filter, category: 'csa'} }))
        console.log(this.state)
    }

    onHandleChange = (ev) => {
        let { name, value } = ev.target;
        value = ev.currentTarget.type === 'category' ? ev.target.innerText : value;

        if (ev.currentTarget.type === 'category') {
            this.setState(prevState => ({ filter: { ...prevState.filter, category: value } }), () => {
                this.props.onSetFilter(this.state.filter)
            })
            document.querySelector('.default-option p').innerText = value
            this.toggleClass()
        } else if (ev.currentTarget.type === 'all') {
            this.setState(prevState => ({ filter: { ...prevState.filter, category: '' } }), () => {
                this.props.onSetFilter(this.state.filter)
            })
            document.querySelector('.default-option p').innerText = 'All'
            this.toggleClass()
        }
        this.setState(prevState => ({ filter: { ...prevState.filter, [name]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }

    toggleClass = () => {
        if (this.state.toggleClass === 'category-filter-container') {
            this.setState({ toggleClass: 'category-filter-container active' })
        } else {
            this.setState({ toggleClass: 'category-filter-container' })
        }
    }

    onToggelButtonsFilter = ({ target }) => {
        const field = target.name;
        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: !prevState.filter[field] } }), () =>
            this.props.onSetFilter(this.state.filter));
    }

    render() {

        return (
            <section className="event-filter container">
                <div className="input-filter">
                    <h2>Find your next event</h2>
                    <div className="filter-search">
                        <i className="fas fa-search fa-lg"></i>
                        <input type="text" label="Search..." name="title" value={this.state.filter.title} onChange={this.onHandleChange} type="search" />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>

                <div className="filters">
                    <div className={this.state.toggleClass}>
                        <ul className="default-option" onClick={this.toggleClass} >
                            <li>
                                <p>All</p>
                            </li>
                        </ul>
                        <ul className="category-filter" value={this.state.filter.category} >
                            <li type='all' onClick={this.onHandleChange}>
                                <p>All</p>
                            </li>
                            {this.state.categories.map((category, idx) => (
                                <li key={idx} type='category' onClick={this.onHandleChange}>
                                    <div className='option'>
                                        <i className={category.className}></i><p >{category.name}</p>
                                    </div>
                                </li>))}
                        </ul>
                    </div>

                    <div>
                        <button className="isFree-button btn" name="isFree" onClick={this.onToggelButtonsFilter} >Free</button>
                    </div>
                    <div>
                        <button onClick={this.onToggelButtonsFilter} name="thisMonth" >Up Coming Month</button>
                    </div>
                </div>
            </section>
        )

    }
}
