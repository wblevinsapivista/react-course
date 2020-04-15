import React, { Component } from 'react';
import styled from 'styled-components';

import classes from './App.css';
import Person from './Person/Person';


class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { key: 1, name: 'Max', age: 28 },
        { key: 2, name: 'Manu', age: 29 },
        { key: 3, name: 'Stephanie', age: 27 }
      ],
      otherState: 'some other value',
    };
  }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return (p.id === id);
    });
    
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }
  
  togglePersonHandler = (event) => {
    const showPersons = !this.state.showPersons;
    this.setState({ showPersons: showPersons });
  }

  deletePersonHandler = (personIndex) => {
    // we want to make a copy of the persons array rather than the original
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} 
              name={person.name} age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}></Person>
          })}
        </div>
      )
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');
    } 

    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={classes.button} alt={this.state.showPersons} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {persons}          
      </div>  
    );
  }
}

export default App;
