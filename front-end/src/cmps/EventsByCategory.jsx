import React from 'react';
import { Link } from 'react-router-dom'
import { EventService } from '../services/EventService';
import{ useHistory } from 'react-router-dom'
export function EventsByCategory(props) {

    const categories = EventService.getCategories();
const history = useHistory()
    

  return (
    <div>
      <h1>{props.category}</h1>
      {props.category ? (
        <img src={EventService.setCategoryBackground(props.category)} />
      ) : (
        'Loading...'
      )}
      <div className="dropdown">
        <button className="dropbtn">Try somthing else</button>
        <div className="dropdown-content">
         {categories.map(category => <Link onClick{()=> history.push(`"/event/${category.category}"`)} to={`/event/${category.category}`}   key={category.category}>{category.category} </Link>)} 
        </div>
      </div>
    </div>
  );
}
