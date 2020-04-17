import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => (<Person 
    click={() => props.onPersonClick(index)} 
    name={person.name} age={person.age}
    changed={(event) => props.onNameChange(event, person.key)}></Person>));

export default Persons;