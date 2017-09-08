import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAddList } from '../../redux/actions/todo'

class Todo extends Component{
  constructor(props) {
    super(props)
    this.state = {sPreAdd:""}
  }
  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    const {state:{sPreAdd},props:{onAddList}} = this
    return (
      <div>
        <h3>Todo:</h3>
        <input value={sPreAdd} onChange={(e)=>this.setState({sPreAdd: e.target.value})}/>
        <button onClick={() => onAddList(sPreAdd)}>add</button>
        <p/>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {    
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onAddList: (sPreAdd) => dispatch(getAddList (sPreAdd))
    } 
}
const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer

