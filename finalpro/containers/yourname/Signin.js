import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { getuserinformation } from '../../redux/actions/userinform'
// import { getuser} from '../../redux/actions/signin' 

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {userid:null, username:null}
    }
    render() {
        console.log('props', this.props)
        console.log('state', this.state)
        const {state:{userid,username},props:{displayid, displayname, onUserInform}} = this;
        return (
            <div>
                <h3>Hello</h3>
                <p>帳號</p>
                <input value={userid}/>
                <p>名稱</p>
                <input value={username}/>
                <button onClick={() => onUserInform(userid,username)}>送出</button>
                <span style={{color:"blue"}}>{displayid}</span>
                <span style={{color:"blue"}}>{displayname}</span>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        displayid: state.userinform.inform,
        displayname: state.userinform.inform
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUserInform: () => dispatch(getuserinformation())
    }
}

const SigninContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Signin)

export default SigninContainer