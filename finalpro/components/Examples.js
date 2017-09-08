import React, { Component } from 'react'
import Counterjump from '../containers/examples01/Counter'
import Sum from '../containers/examples01/Sum'
import RandomImages from '../containers/examples01/RandomImages'
import RevealInsert from '../containers/examples01/RevealInsert'

export default class Examples extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        <Counterjump />
        <Sum/>
        <RevealInsert/>
        <RandomImages/>
      </div>
    )
  }
}