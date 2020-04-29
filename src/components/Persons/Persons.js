import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // shouldComponentUpdate MUST return true or false depending on whether the component should be re-rendered
        console.log('[Person.js] inside shouldComponentUpdate method');     
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    // this is by far the most used hook
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);

    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        return this.props.persons.map((person, index) => {
            console.log('[Person.js] rendering');
            console.log(this.props.persons);
            return (
                <Person key={index} click={() => this.props.onPersonClick(index)} 
                    name={this.props.persons[index].name} age={this.props.persons[index].age}
                    changed={(event) => this.props.onNameChange(event, this.props.persons[index].key)}></Person>
            )
        });
    }
}

export default Persons;