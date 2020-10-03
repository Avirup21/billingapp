import React from 'react';
import {connect} from 'react-redux'
import Home from './components/Home'
import UserReg from './components/UserReg'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import UserLogin from './components/UserLogin'
import UserAccnt from './components/userAccnt'
import CustomerList from './components/CustomerList'
import CustomerAccnt from './components/CustomerAccnt'
import ProductAccnt from './components/ProductAccnt'
import ProductList from './components/ProductList'
import BillCreate from './components/BillCreate'
import UpdateCustomer from './components/updateCustomer'
import ViewCustomer from './components/ViewCustomer'
import UpdateProduct from './components/updateProduct'
import BillListing from './components/BillListing'
import ViewProduct from './components/ViewProduct'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props){
  return(
    <Router>
        <Container className='p-3'>
        <div>
      <Route path='/' component={Home} exact={true}/>
      {
      Object.keys(props.user).length!=0 ?
      (
        <div align='right'>
          {/* <Link to='/account'>Account</Link>
          <Link to='#'>Logout</Link> */}
          <Route path='/account' component={UserAccnt}/> 
          <Route path='/customers' component={CustomerAccnt}/> 
          <Route path='/products' component={ProductAccnt}/>
          <Route path='/bills' component={BillCreate}/>
          </div>
      ):(
        <div align='right'>
           {/* <Link to='/register'>Sign up</Link>
           <Link to='/login'>Sign in</Link> */}
           <Route path='/register' component={UserReg}/>
           <Route path='/login' component={UserLogin} />
        </div>
      )
      }
     
      {/* <Route path='/customers' component={CustomerAccnt}/>  */}
      <Route path='/customerlist' component={CustomerList} />
      {/* <Route path='/products' component={ProductAccnt}/> */}
      <Route path='/productlist' component={ProductList}/>
      {/* <Route path='/bills' component={BillCreate}/> */}
      <Route path='/updateCustomer/:id' component={UpdateCustomer}/>
      <Route path='/ViewCustomer/:id' component={ViewCustomer}/>
      <Route path='/updateProduct/:id' component={UpdateProduct}/>
      <Route path='/ViewProduct/:id' component={ViewProduct}/>
      <Route path='/billListing' component={BillListing}/>

    </div>   
        </Container>
    </Router>
  )
}
const mstp=(state)=>{
  return {
    user:state.userAccnt
  }
}
export default connect(mstp)(App);
