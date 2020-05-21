import React from 'react';
import { useHistory } from 'react-router-dom'
import { EventService } from '../services/EventService';
export function EventsByCategory(props) {

  const categories = EventService.getCategories();
  
  let history = useHistory()


  return (
    <div>
      <h1>{props.category}</h1>
      {props.category ? (
        <img src={EventService.setCategoryBackground(props.category)} alt=""/>
      ) : (
          'Loading...'
        )}
      <div className="dropdown">
        <button className="dropbtn">Try somthing else</button>
        <div className="dropdown-content">
          {categories.map(category => <button onClick={async () => history.push(`/event/${category.category}`, true)} key={category.category}>{category.category} </button>)}
        </div>
      </div>
    </div>
  );
}
