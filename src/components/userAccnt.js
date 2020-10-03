import React from 'react'
import {startGetAccount} from '../actions/userLoginAction' 
import { connect } from 'react-redux'

class UserAccnt extends React.Component{
    componentDidMount(){
        this.props.dispatch(startGetAccount())
    }
    render(){
        console.log('user',this.props.userAccnt.username)
        return(
            <div align='center'>
                <h2>User Info</h2><br/>
        {Object.keys(this.props.userAccnt).length!=0 && 
          <div >
           <label >Username-{this.props.userAccnt.username}</label><br/>
           <label >Email-{this.props.userAccnt.email}</label><br/>
           <label >Business Name-{this.props.userAccnt.businessName}</label><br/>
           <label >Address-{this.props.userAccnt.address}</label><br/>
             </div>
        }    
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        userAccnt:state.userAccnt
    }
}
export default connect(mstp)(UserAccnt)
