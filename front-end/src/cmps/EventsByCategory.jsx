import React from 'react';
import { useHistory } from 'react-router-dom'
import { EventService } from '../services/EventService';
import { Link } from 'react-router-dom'
import { EventList } from './EventList'

export function EventsByCategory(props) {

  const {category, events} = props;
  const bg = EventService.setCategoryBackground(category);
  const categories = EventService.getCategories()
  
  return (
    <div className="category-page">
      {!category ? (
       'Loading...') : <div>
         <img src={`${bg}`} />
        <h1>{category}</h1>
        </div>}
      <div className="dropdown">
        <button className="dropbtn">Try somthing else</button>
        <div className="dropdown-content">
          {categories.map((category , idx) => <Link to={`/event/${category}`} key={idx}>{category}</Link>)}
        </div>
      </div>

        <EventList category={category} events={events} />
    </div>
  );
}


