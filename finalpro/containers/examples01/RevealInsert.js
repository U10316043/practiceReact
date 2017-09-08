import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getName } from '../../redux/actions/index'
class RevealInsert extends Component {
    constructor(props) {
        super(props)
        this.state = {sUsername:""}
    }
    render() {
        console.log('props', this.props)
        console.log('state', this.state)
        const {state:{sUsername},props:{onRevealName, reveal:{sRevealUsername}}} = this
        return (
            <div>    
                <span>please enter your username</span>
                <input value={sUsername} onChange={(e)=>this.setState({sUsername: e.target.value})}/>
                <button onClick={() => onRevealName(sUsername)}>ok</button>
                <p/>
                <span>{sRevealUsername}</span>
               
           
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {    
        reveal: state.examplesaaa.revealreducer
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onRevealName: (sUsername) => dispatch(getName(sUsername))
    }
}
const UsernameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RevealInsert)
  
export default UsernameContainer
