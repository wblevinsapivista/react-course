import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

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
      return (p.key === id);
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
        <Persons persons={this.state.persons} onNameChange={this.nameChangeHandler} 
          onPersonClick={this.deletePersonHandler}></Persons>
      )
    }

    return (
      <div className="App">
        <Cockpit persons={this.state.persons} 
          togglePersonHandler={this.togglePersonHandler}></Cockpit>
        {persons}          
      </div>  
    );
  }
}

export default App;
