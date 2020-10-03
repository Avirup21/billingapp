import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../App.css'

const imgMyimageexample = require('../images/billing.jpg');
const divStyle = {
//   width: '100%',
//   height: '1000px',
  minHeight: '599px',
  maxWidth: '1395px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',  
  marginRight: '-131px',
    marginLeft: '-131px',
    marginTop: '-16px',
    marginBottom:'-15px'
};

class Home extends React.Component{
    handleLogout=()=>{
        window.localStorage.clear()
        console.log('Log Out Local Storage', localStorage)
        // const redirect=()=>{
        //     this.props.history.push('/')
        // }
        // redirect()
        window.location.href='/'
    }
    render(){
        return(
            <div style={divStyle} align='center'>
                    <h2>Billing App</h2>
                <form align='right'>
                {
      Object.keys(this.props.user).length!=0 ?
      (
        <div class='dashboard1' align='right'>
          <Link to='/account'>Account |</Link>
          <Link  onClick={this.handleLogout} to='#'> Logout</Link><br/>
          <Link to={`/customers`}>Customers | </Link>
          <Link to={`/products`}> Products | </Link>
          <Link to={`/bills`}> Bills</Link>
          </div>
      ):(
        <div  class='dashboard'  align='right'>
           <Link to='/register'>Sign up | </Link>
           <Link to='/login'>Sign in</Link>
           {/* <Route path='/register' component={UserReg}/>
           <Route path='/login' component={UserLogin} /> */}
        </div>
      )
      }
                    {/* <Link to={`/register`}> Sign up |</Link>
                    <Link to={`/login`}>Sign in</Link> */}
                </form>
            </div>
        )
    }
 }
const mstp=(state)=>{
    return{
        user:state.userAccnt
    }
}
export default connect(mstp)(Home)