import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import SweetAlert from 'react-bootstrap-sweetalert'
import {startGetCstmrAccnt} from '../actions/CstmrAccntAction'
import {startGetAccount} from '../actions/userLoginAction'

class CustomerAccnt extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            mobile:'',
            email:'',
            flagS:false,
            flagE:false  
        }
    }
    componentDidMount(){
        // alert('get user details')
            this.props.dispatch(startGetAccount())
        }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }
     onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })

    }
     handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            mobile:this.state.mobile,
            email:this.state.email
            
        }
        console.log('formData',formData)
        if( this.state.name == "" || this.state.email == "" || this.state.mobile == "" ){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
        }
        this.props.dispatch(startGetCstmrAccnt(formData))
        this.setState({
            name:'',
            mobile:'',
            email:'',
        })
    }
    render(){
        console.log('Customer Component',this.props.userAccnt)
        console.log('Cust Ls',localStorage)
        return(
            <div>
                  {/* <div align='right'><h5>Hello , {localStorage.getItem('userAccnt') == "" ? "" : localStorage.getItem('userAccnt')}</h5> </div> */}
                 <form align='right'>
                    <Link to={`/customerlist`}>Customer Details</Link>
                </form>
                <form align='center'>
                    <h2>Customer Register</h2><br/>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Name</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='name' value={this.state.name} placeholder="Enter your name" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Email</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="email" name='email' value={this.state.email} placeholder="Enter your email" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Mobile</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='mobile' value={this.state.mobile} placeholder="Enter your mobile no" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Button variant='primary' onClick={this.handleSubmit}>Create</Button>
                    </form>

                    <SweetAlert 
                    success
                    title="Success Data!"
                    show={this.state.flagS}
                    onConfirm={(response) => this.onRecieveInput(response)}>
                        Created!!!!!!!
                    
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
export default connect(mstp)(CustomerAccnt)