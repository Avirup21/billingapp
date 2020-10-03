import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import SweetAlert from 'react-bootstrap-sweetalert'
import {startGetUpdateProduct} from '../actions/ProductAccntAction'

class UpdateProduct extends React.Component{
    constructor(){
        super()
        this.state={
              name:'',
              price:'',
              flagS:false,
              flagE:false
        }
    }

    onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })
        const redirect=()=>{
            this.props.history.push('/productlist')
        }
        redirect()

    }
   
    handleSubmit=(e)=>{
        e.preventDefault()
        const id=this.props.match.params.id
        // alert(id)
        const formData={
            name:this.state.name,
            price:this.state.price
        }
        console.log(formData)
        if(  this.state.name == "" || this.state.price == "" ){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
            
        }
        this.props.dispatch(startGetUpdateProduct(id,formData))
        this.setState({
            name:'',
            price:''
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
                    <h2>Update Product</h2><br/>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Name</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text"  name='name' value={this.state.name} placeholder="Enter your name" onChange={this.handleChange} />
                       </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                       <Form.Label column sm={2}>Price</Form.Label>
                       <Col sm={6}>
                       <Form.Control type="text" name='price' value={this.state.price} placeholder="Enter price" onChange={this.handleChange} />
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
        product:state.products
    }
}
export default connect(mstp)(UpdateProduct)