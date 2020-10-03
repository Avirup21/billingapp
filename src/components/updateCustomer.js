import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import SweetAlert from 'react-bootstrap-sweetalert'
import {startGetUpdateCustomer} from '../actions/customerAction'

class UpdateCustomer extends React.Component{
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

    onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })
        const redirect=()=>{
            this.props.history.push('/customerlist')
        }
        redirect()

    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const id=this.props.match.params.id
        // alert(id)
        const formData={
            name:this.state.name,
            mobile:this.state.mobile,
            email:this.state.email
        }
        console.log(formData)
        if(  this.state.name == "" || this.state.mobile == "" || this.state.email=="" ){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
            
        }
        this.props.dispatch(startGetUpdateCustomer(id,formData))
        this.setState({
            name:'',
            mobile:'',
            email:''
        })
       
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){     
        // console.log('this.props.customers',this.props.customer)
        // console.log('upd customer',this.props)
        return(
            <div>
               <form align='center'>
                    <h2>Update Customer</h2><br/>
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
                    <Button variant='primary' onClick={this.handleSubmit}>Update</Button>
               </form>
               <SweetAlert 
                    success
                    title="Success Data!"
                    show={this.state.flagS}
                    onConfirm={(response) => this.onRecieveInput(response)}>
                        Updated successfully!!!!!!!
                    
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
        customer:state.customers
       
    }
}
export default connect(mstp)(UpdateCustomer)