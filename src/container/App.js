import React, { Component } from 'react';

/* Components */
import Persons from '../components/persons/persons';

/* Style sheet */
import './App.scss'

class App extends Component {

  constructor(props) {
    super(props);
    this.deletePersonHandler = this.deletePersonHandler.bind(this);
    this.showPersonsHandler = this.showPersonsHandler.bind(this);
  }

  state = {
    showPerson: false,
    persons: [
      { id: 1, name: 'Alexander', age: '30' },
      { id: 2, name: 'Christina', age: '28' },
      { id: 3, name: 'Antony', age: '54' },
      { id: 4, name: 'Henry', age: '60' }
    ]
  }

  showPersonsHandler() {
    this.setState({ showPerson: !this.state.showPerson });
  }

  deletePersonHandler = (personId) => {
    console.log(personId)
  }

  render() {

    return (
      <div className="App" >
        <button className="app-btn"
          onClick={this.showPersonsHandler}>
          {!this.state.showPerson ? 'Show Persons' : 'Hide Persons'}
        </button>
        {this.state.showPerson &&
          <Persons
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
          />}
      </div>
    );
  }
}

export default App;