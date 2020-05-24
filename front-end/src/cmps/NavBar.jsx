import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class NavBar extends Component {
    state = {
        currentScrollHeight: 0
    }
    componentDidMount () {      
            window.onscroll =()=>{
             const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
             if (this.state.currentScrollHeight !== newScrollHeight){
                 this.setState({currentScrollHeight: newScrollHeight})
             }
           }
    };
    render(){
        const opacity = Math.min(this.state.currentScrollHeight/100  , 1)
        const navBgc = `rgb(247, 255, 255,${opacity})`
        const border = `rgb(229, 229, 229,${opacity})`
    return (
    <nav className="navbar" style={{backgroundColor: navBgc,borderBottom: `1px solid ${border}`}}>
        <div className="navbar-content container">
            <Link className="logo lead" to="/">CatchOn </Link>
            <ul className="links">
                <li><Link to="/event/edit">Create Event</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    </nav>
    )
    }
}


    
