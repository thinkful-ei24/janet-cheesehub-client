import React, { Component } from 'react';
import './App.css';
import CheeseList from './cheese-list';
import { connect } from 'react-redux';
import {fetchCheeses, fetchCheeseRequest} from './actions/cheese'


class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchCheeseRequest());
    this.props.dispatch(fetchCheeses());
  }

  render() {
    if(this.props.loading){
      return (
        <div>Loading...</div>
      )
    }
  
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
  cheeses: state.cheeseReducer.cheeses,
  loading: state.cheeseReducer.loading,
  error: state.cheeseReducer.error
}
}
export default connect(mapStateToProps)(App);
