import React, { Component } from 'react';
import SearchBar from './components/search.bar';
import './App.css';

const API_KEY = 'AIzaSyDyPl-YqhqDwEHEAdSapsJCZgQbD9NFoGs';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
