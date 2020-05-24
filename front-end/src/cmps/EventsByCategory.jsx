import React from 'react';
import { useHistory } from 'react-router-dom'
import { EventService } from '../services/EventService';
import { Link } from 'react-router-dom'
import { EventList } from './EventList'
import { EventFilter } from '../cmps/EventFilter';

export function EventsByCategory(props) {

  const {category, events} = props;
  const bg = EventService.setCategoryBackground(category);

  return (
    <div className="category-page">
      {!category ? (
       'Loading...') : <div>
         <img src={`${bg}`} />
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        </div>}

      

      <EventList category={category} events={events} />
    </div>
  );
}


