import { connect } from 'react-redux'
import { getSum } from '../../redux/actions/index'
import { getSub } from '../../redux/actions/index'
import { increase } from '../../redux/actions/index'
import React, { Component } from 'react'

class Sum extends Component{
  constructor(props) {
    super(props)
    this.state = {a1:1, b1: 2,a2:4, b2: 3}
  }
  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    const {state:{a1,b1,a2,b2}, props:{sum, sub, onSum, onSub, onIncrement}} = this;
    return (
      <div>
        <input value={a1} 
            onChange={(e)=>this.setState({a1: e.target.value})}/> 
        + <input value={b1} 
            onChange={(e)=>this.setState({b1: e.target.value})}/>
        = <span>{sum}</span>
        <button onClick={() => onSum(a1,b1)}> Sum</button>
        <p/>
        <input value={a2} 
            onChange={(e)=>this.setState({a2: e.target.value})}/> 
        - <input value={b2} 
            onChange={(e)=>this.setState({b2: e.target.value})}/>
        = <span>{sub}</span>
        <button onClick={() => onSub(a2,b2)}> Sub</button>
        <button onClick={onIncrement}> Increment</button>
        <p/>
      </div>
    )
  }
}

export default  connect(
  (state, ownProps) => ( {
    sum: state.examplesaaa.sum.sumclone,
    sub: state.examplesaaa.sub
  }),
  {
    onSum: getSum,
    onSub: getSub,
    onIncrement: increase
  }
)(Sum)