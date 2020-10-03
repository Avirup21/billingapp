import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import {startGetBillAccnt} from '../actions/BillAccntAction'

class BillAccnt extends React.Component{
    constructor(){
        super()
        this.state={
            // date:'',
            // customerId:'',
            // productId:'',
            // qty:''
            lineItems: [{ index: Math.random(), products: "", qty: "" }],
            date: "",
            customers: "",
        }
        
    }
    // componentDidMount(){
    //     alert('get user details')
    //         this.props.dispatch(startGetAccount())
    //     }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }
     handleSubmit=(e)=>{
        e.preventDefault()
        const productData={
            product:this.state.productId,
            quantity:this.state.qty

        }
        const arr =[]
        arr.push(productData)
        const formData={
            date:this.state.date,
            customer:this.state.customerId,
            lineItems : arr
        }
        
        console.log('formData',formData)
        // if( this.state.username == "" || this.state.email == "" || this.state.password == "" || this.state.businessName == "" 
        // || this.state.address == ""){

        //     this.setState({ flagE : true })
        // }
        // else{

        //     this.setState({ flagS : true })
        // }
        this.props.dispatch(startGetBillAccnt(formData))
    }
    render(){
        // console.log('Customer Component',this.props.userAccnt)
        // console.log('Cust Ls',localStorage)
        let { taskList } = this.state //let { notes, date, description, taskList } = this.state
        return(
            <div>
                  <div align='right'><h5>Hello , {localStorage.getItem('userAccnt') == "" ? "" : localStorage.getItem('userAccnt')}</h5> </div>
                 {/* <form align='right'>
                    <Link to={`/productlist`}>Product Details</Link>
                </form> */}
                <form align='center'>
                    <h2>Bill Create</h2><br/>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Date</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="date"  name='date' value={this.state.date} placeholder="Enter date" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Customer</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='customerId' value={this.state.customerId} placeholder="Enter customer id" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Product</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='productId' value={this.state.productId} placeholder="Enter product id" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Product</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='productId' value={this.state.productId1} placeholder="Enter product id" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Quantity</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='qty' value={this.state.qty} placeholder="Enter quantity" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Button variant='primary' onClick={this.handleSubmit}>Create</Button>
                    </form>
            </div>
        )
    }
}
export default connect()(BillAccnt)