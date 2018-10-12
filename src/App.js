import React, { Component } from 'react';
import './App.css';
import CheeseList from './cheese-list';
import { connect } from 'react-redux';
import {fetchCheeses} from './actions/cheese'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheeseList cheeseList={
          ["Bath Blue",
            "Barkham Blue",
            "Buxton Blue"]} />
      </div>
    );
  }
}

export default connect()(App);
