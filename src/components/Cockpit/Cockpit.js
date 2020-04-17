import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assignedClasses = [];

    if (props.persons.length <= 2) {
      assignedClasses.push('red');
    } 

    if (props.persons.length <= 1) {
      assignedClasses.push('bold');
    }
    
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={classes.button} alt={props.showPersons} onClick={props.togglePersonHandler}>
            Switch Name
            </button>
        </div>
    );
};

export default Cockpit;