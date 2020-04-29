import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const assignedClasses = [];

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(() => {
      alert('saved data to cloud');
    }, 1000)
  }, []);  // the empty array makes this code only execute the first time

  if (props.persons.length <= 2) {
    assignedClasses.push('red');
  } 

  if (props.persons.length <= 1) {
    assignedClasses.push('bold');
  }
  
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={classes.button} alt={props.showPersons} onClick={props.togglePersonHandler}>
      Switch Name
      </button>
    </div>
  );
};

export default Cockpit;