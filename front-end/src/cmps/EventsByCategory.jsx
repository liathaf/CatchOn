import React from 'react';
import { useHistory } from 'react-router-dom'
import { EventService } from '../services/EventService';


export function EventsByCategory(props) {

  const categories = EventService.getCategories();
  const {category} = props;

  return (
    <div>
      <h1>{category}</h1>
      {props.category ? (
        <img src={`${props.category}.jpg`} />) : ('Loading...')}
      {/* <div className="dropdown">
        <button className="dropbtn">Try somthing else</button>
        <div className="dropdown-content">
          {categories.map((category , idx) => <Link to={`/event/${category}`} key={idx}>{category}</Link>)}
        </div>
      </div> */}
    </div>
  );
}
