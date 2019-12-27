import React, { Component } from 'react';

/* Components */
import Persons from '../components/persons/persons';

/* Style sheet */
import './App.scss'

class App extends Component {

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
    const personIndex = this.state.persons.findIndex(p => { return p.id === personId });

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  }

  changeNameHandler(event, personId) {
    const personIndex = this.state.persons.findIndex(p => { return p.id === personId });

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({ persons: persons });
  }

  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = (<Persons
        persons={this.state.persons}
        deletePerson={this.deletePersonHandler}
        updateName={this.changeNameHandler.bind(this)}
      />)
    }

    return (
      <div className="App" >
        <button className="app-btn"
          onClick={this.showPersonsHandler.bind(this)}>
          {!this.state.showPerson ? 'Show Persons' : 'Hide Persons'}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;