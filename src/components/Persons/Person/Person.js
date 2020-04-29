import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    margin-top: 16px;
    text-align: center;    
    @media (min-width: 500px) {
        width: 450px
    }
`;


class Person extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log('[Person.js] rendering...');
        return (
            <StyledDiv>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </StyledDiv>
        )
    }
};

export default Person;