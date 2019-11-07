import React, { Component } from 'react';
import './App.css';

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
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
