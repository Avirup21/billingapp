import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import SweetAlert from 'react-bootstrap-sweetalert'
import { BsEye , BsEyeSlash } from "react-icons/bs"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startGetUsers} from '../actions/usersAction'

class UserReg extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            businessName:'',
            address:'',
            vis:'',
            flagE:false,
            flagS:false
        }
    }
    handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
    }
    handleVis =()=>{
        this.setState((prevState)=>{
            return{
                vis : !prevState.vis
            }
        }) 
    }

    onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
            businessName:this.state.businessName,
            address:this.state.address
        }
        console.log('formData',formData)
        if( this.state.username == "" || this.state.email == "" || this.state.password == "" || this.state.businessName == "" 
        || this.state.address == ""){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
        }
        this.props.dispatch(startGetUsers(formData))
        this.setState({
            username:'',
            email:'',
            password:'',
            businessName:'',
            address:'',
        })
    }
    render(){
        return( 
            <div>
                <form align='right'>
                    <Link to={`/login`}>Sign in</Link>
                </form>
                <form align='center'>
                    <h2>Billing Register</h2><br/>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>UserName*</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='username' value={this.state.username} placeholder="Enter your username" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Email*</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="email" name='email' value={this.state.email} placeholder="Enter your email" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Password*</Form.Label>
                       <Col sm={6}>
                           {this.state.vis? <Form.Control type="text" name='password' value={this.state.password} placeholder="Enter your password" onChange={this.handleChange} />:
                            <Form.Control type="password" name='password' value={this.state.password} placeholder="Enter your password" onChange={this.handleChange} />}
                       {/* <Form.Control type="password" name='password' value={this.state.password} placeholder="Enter your password" onChange={this.handleChange} /> */}
                       </Col>
                       <Button variant='Basic' onClick={this.handleVis}>{ this.state.vis ? <BsEye /> : <BsEyeSlash />} 
                        </Button>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>BusinessName</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text" name='businessName' value={this.state.businessName} placeholder="Enter your businessName" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Address</Form.Label>
                       <Col sm={6}>
                       <Form.Control as='textarea' name='address' value={this.state.address} placeholder="Enter your address" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Button variant='primary' onClick={this.handleSubmit}>Register</Button>
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

export default connect()(UserReg)