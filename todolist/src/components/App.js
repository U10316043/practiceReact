import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import Todo from '../containers/Todo'
import List from '../containers/List'
import Test from '../containers/Test'


export default class App extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div >
          <h1>Bootstrap React</h1>
          <Todo/>
          {' '}
          <List/>
      </div>
    );
  }
}


