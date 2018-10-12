import React, { Component } from 'react';
import './App.css';
import CheeseList from './cheese-list';
import { connect } from 'react-redux';
import {fetchCheeses} from './actions/cheese'


class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchCheeses());
    console.log(this.props.cheeses)
  }

  render() {
    return (
      <div className="App">
      <h1>CHEEEEEESE GROMMIT!</h1>
      <img src='https://singlecut.com/wp-content/uploads/2013/03/wallacegromitcheese.jpg' alt='Wallace and Grommit' />
        <CheeseList className = 'ulList' liClass = 'liList' cheeseList={this.props.cheeses}/>
      </div>
    );
  }
}

function mapStateToProps(state){
return {
  cheeses: state.cheeseReducer.cheeses
}
}
export default connect(mapStateToProps)(App);
