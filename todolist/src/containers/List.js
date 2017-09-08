import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Perlist from './Perlist'
class List extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        {this.props.todothingss.map(todothing =>  
          <Perlist
            key={todothing.id}
            {...todothing}
          />
        )}
      </ul>
    )
  }
}

List.PropTypes = {
  todothingss: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    sAdd: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default connect(
  (state) => {
    return {todothingss: state.todothingss.todosList.filter(todothing => !todothing.deleted)}
  },
  null
)(List)