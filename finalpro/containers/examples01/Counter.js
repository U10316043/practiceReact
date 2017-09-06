import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrease } from '../../redux/actions/index'
import { increase } from '../../redux/actions/index'

class CounterCCC extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    console.log('props', this.props)
    const {countd:{result},onDecrement, onIncrement} = this.props;
    return (
      <div>
        Clicked: <span>{result}</span> times
        <button onClick={onDecrement}>Decrease</button>
        <button onClick={onIncrement}> Increment</button>
        {/* <button onClick={onIncrement}> Increment</button> */}
        <p/>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    countd: state.examplesaaa.countss
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDecrement: () => dispatch(decrease()),
    onIncrement: () => dispatch(increase())
    // ,    onIncrement: () => dispatch(increase())
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterCCC)

export default CounterContainer


// export default connect(
//   (state, ownProps) => ({
//     count: state.examples.count,
//     // prop2: state.prop // just an example in case of many properties
//   }),
//   {
//     onDecrement: decrease,
//     // func2: () => {} // just an example in case you need many functions from dispatch
//   }
// )(Counter)