import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import {startGetProductAccnt} from '../actions/ProductAccntAction'
import SweetAlert from 'react-bootstrap-sweetalert'

class ProductAccnt extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            price:'',
            flagE:false,
            flagS:false
        }
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
            price:this.state.price
            
        }
        console.log('formData',formData)
        if(  this.state.name == "" || this.state.price == "" ){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
        }
        this.props.dispatch(startGetProductAccnt(formData))
        this.setState({
            name:'',
            price:''
        })
    }
    render(){
        // console.log('Customer Component',this.props.userAccnt)
        // console.log('Cust Ls',localStorage)
        return(
            <div>
                  {/* <div align='right'><h5>Hello , {localStorage.getItem('userAccnt') == "" ? "" : localStorage.getItem('userAccnt')}</h5> </div> */}
                 <form align='right'>
                    <Link to={`/productlist`}>Product Details</Link>
                </form>
                <form align='center'>
                    <h2>Product Create</h2><br/>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Name</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='name' value={this.state.name} placeholder="Enter your name" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Price</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='price' value={this.state.price} placeholder="Enter price" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Button variant='primary' onClick={this.handleSubmit}>Create</Button>
                    </form>
                    <SweetAlert 
                    success
                    title="Success Data!"
                    show={this.state.flagS}
                    onConfirm={(response) => this.onRecieveInput(response)}>
                        Success!!!!!!!
                    
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

export default connect()(ProductAccnt)