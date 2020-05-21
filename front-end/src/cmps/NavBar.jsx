import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class NavBar extends Component {
    state = {
        currentScrollHeight: 0
    }
    componentDidMount () {      
            window.onscroll =()=>{
             const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
             if (this.state.currentScrollHeight != newScrollHeight){
                 this.setState({currentScrollHeight: newScrollHeight})
             }
           }
    };
    render(){
        const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)
    return (
    <nav className="navbar" style={{opacity:opacity}}>
        <div className="navbar-content container">
            <Link className="logo lead" to="/">CatchOn </Link>
            <ul className="links">
                <li><Link to="/edit">Create Event</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    </nav>
    )
    }
}


    
// componentDidMount () {      
//     window.onscroll =()=>{
//      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
//      if (this.state.currentScrollHeight != newScrollHeight){
//          this.setState({currentScrollHeight: newScrollHeight})
//      }
//    }
//  }

//  render(){
//     const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)
 
//      return <div style={{opacity}} id='element-you-want-to-fade'> </div>
//  }