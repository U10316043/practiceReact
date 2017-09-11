import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAddList } from '../redux/actions/index'

class Todo extends Component{
  constructor(props) {
    super(props)
    this.state = {todothing:""}
  }
  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    const {state:{todothing}} = this
    const onAddList = (e) => {
      e.preventDefault()
      if(!todothing.trim()) {  {/* trim() method removes whitespace from both ends of a string.  */}
        return
      }
      this.props.getAddList(todothing);
      this.setState({todothing:''})
    }
    return (
        <div>
          <form onSubmit={ onAddList }>
            <h3>Todo:</h3>
            <input value={todothing} onChange={(e)=>this.setState({todothing: e.target.value})}/>
            <button type="submit">add</button>
            <p/>
          </form>
        </div>
    )
  }
}

export default connect(null,{
  getAddList
}
)(Todo)


