import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/actions/index'

const Perlist = ({id, deleteTodo, sAdd, deleted}) =>  (
  <li  onClick={ () => deleteTodo(id) }>
    {sAdd}
  </li>
)

Perlist.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  deleted: PropTypes.bool.isRequired,
  sAdd: PropTypes.string.isRequired
}


export default connect(
  null,  
  {
    deleteTodo
  }
)(Perlist)