import React, { Component } from 'react';

import './App.css';

import {CardList} from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 'asc1',
          name: 'Frankenstein'
        },
        {
          id: 'asc2',
          name: 'Dracula'
        },
        {
          id: 'asc3',
          name: 'John Wick'
        },
      ],
    };
  };

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()
      .then(users => this.setState({'monsters': users})));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
