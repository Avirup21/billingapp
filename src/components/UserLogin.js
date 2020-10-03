import React from 'react'
import {connect} from 'react-redux'
import {startGetLogin} from '../actions/userLoginAction'
import {startGetAccount} from '../actions/userLoginAction'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import SweetAlert from 'react-bootstrap-sweetalert'

class UserLogin extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            flagS:false,
            flagE:false,
            flag:true
        }
    }
    handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
    }
    // componentDidMount(){
    //     console.log('localStorageInCDM',localStorage)
    //         this.props.dispatch(startGetAccount())
    // }
    
    onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })
        this.props.dispatch(startGetAccount())
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
       
        if(  this.state.email == "" || this.state.password == "" ){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
        }
       
        const redirect=()=>{
            this.props.history.push('/')
        }
        this.props.dispatch(startGetLogin(formData))
        this.setState({
            email:'',
            password:''
        })
    }
    
    handleLogOut=()=>{
        // console.log('clear token',localStorage.removeItem('userAccnt'))
    //    this.setState({
    //        flagN:true
    //    })
        window.localStorage.clear()
        console.log('Log Out Local Storage', localStorage)
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()

    }
    render(){
        console.log('last udated2',this.props.userAccnt[0])
        // localStorage.setItem('userAccnt',this.props.userAccnt.map((user) => user.username)[0])
        // console.log('localstorage',typeof(localStorage.getItem('userAccnt')))
        // console.log('LsInRender',localStorage)
        // console.log('flag',this.state.flag)

        return(
            <div>
                 {/* <div align='right'><h5>Hello ,{this.props.userAccnt.map(user=>user.username)[0]}</h5> </div> */}
                {/* <div align='right'><h5> { localStorage.getItem('userAccnt')=='undefined' ? "" : localStorage.getItem('userAccnt')}</h5> </div> */}
        <div align='right'>{this.props.userAccnt[0]?.username}</div>
                <form align='right'>
                    {/* <Button onClick={this.handleUserInfo}><Link to={`/customers`}>Customers | </Link></Button> */}
                    {/* <Link to={`/customers`}>Customers | </Link>
                    <Link to={`/products`}> Products | </Link>
                    <Link to={`/bills`}> Bills</Link> */}
                </form>
               
                <form align='center' onSubmit={this.handleSubmit}>
                    <h2>Login</h2> <br/>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Email</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="email" name='email' value={this.state.email} placeholder="Enter your email" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Password</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="password" name='password' value={this.state.password} placeholder="Enter your password" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>

                    <Button variant='primary' onClick={this.handleSubmit}>Sign in</Button>{' '}
                    <Button variant='primary' onClick={this.handleLogOut}>LogOut</Button>
                </form>
                <SweetAlert 
                    success
                    title="Success Data!"
                    show={this.state.flagS}
                    onConfirm={(response) => this.onRecieveInput(response)}>
                        Registration successfull!!!!!!!
                    
                </SweetAlert>

                <SweetAlert
                        error
                        title="Error Data!"
                        show={this.state.flagE}
                        onConfirm={(response) => this.onRecieveInput(response)}>
                    Please Enter all the required fields !!! 
                    </SweetAlert>
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        userAccnt:state.userAccnt
    }
}

export default connect(mstp)(UserLogin)