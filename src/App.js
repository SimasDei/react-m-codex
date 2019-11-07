import React, { Component } from 'react';

import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  };

  handleChange = (e) => this.setState({'searchField': e.target.value});
  handleSearchTerm = (item, term) => item.name.toLowerCase().includes(term.toLowerCase());
  filterMonsters = (monsters, searchField) => monsters.filter(monster => this.handleSearchTerm(monster, searchField));

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()
      .then(users => this.setState({'monsters': users})));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = this.filterMonsters(monsters, searchField);

    return (
      <div className="App">
        <h1>React-M Codex</h1>
        <SearchBox placeholder={'Search Monster'} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
