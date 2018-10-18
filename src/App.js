import React, { Component } from 'react';
import './App.css';
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";

class App extends Component {
  render() {
    return <div>
      <SearchForm/>
      <MovieList/>
    </div>;
  }
}

export default App;
