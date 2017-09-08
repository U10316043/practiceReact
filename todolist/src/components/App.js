import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import Todo from '../containers/Todo'
import List from '../containers/List'


export default class App extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div >
          <h2>Welcome to React</h2>
          <Todo/>
          <List/>
      </div>
    );
  }
}


