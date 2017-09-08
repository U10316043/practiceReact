import React, { Component } from 'react';
import Todo from '../containers/todolist/Todo'
import List from '../containers/todolist/List'

export default class App extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
        <div>
          <h2>TodoList</h2>
          <Todo/>
          <List/>
        </div>
    );
  }
}


