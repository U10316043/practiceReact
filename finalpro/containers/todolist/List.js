import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    const {list:{RevealList}} = this.props
    return (
        <div>
        <h3>List</h3>
        <li>{RevealList}</li>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {    
        list: state.todoListReducer.todoReducer
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {

    } 
}
const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer

