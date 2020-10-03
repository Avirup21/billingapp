import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
// import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import {startGetProducts,startGetProduct,startGetDeleteProduct} from '../actions/ProductAccntAction'

class ProductList extends React.Component{
    constructor(){
        super()
        this.state={
            //   name:'',
            //   mobile:'',
            //   email:''
            // id:''
            search:'',
            newsearch:''
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetProducts())
    }
    handleSearchChange=(e)=>{
        console.log('search value', e.target.value )
        // let newlyDisplayed=this.props.customer.filter(ele=>ele.name.split(' ')[0]==e.target.value)
        console.log('newDisplayprdct',this.props.product.filter(ele=>ele.name.split(' ')[0]==e.target.value))
        
        this.setState({
            [e.target.name]:e.target.value,
            newsearch:this.props.product.filter(ele=>ele.name.split(' ')[0]==e.target.value)
        })
    }
    handleUpdate=(id)=>{
        this.setState({id})
       
        const redirect=()=>{
            this.props.history.push(`/updateProduct/${id}`)
        }
        redirect()
    }
    handleDelete=(id)=>{

        this.props.dispatch(startGetDeleteProduct(id))
    }
    
    handleViewdetails=(id)=>{
        // console.log(id)
        this.props.dispatch(startGetProduct(id))
       
        const redirect=()=>{
            this.props.history.push(`/ViewProduct/${id}`)
        }
        redirect()
    }
    render(){     
        // console.log('this.props',this.props)
        return(
            <div>
                 <div align='center'>
                     <h2>Product List</h2>
                </div>
                <div align='right'>
                    <Col sm={4}>
                    <Form.Control type='text' name='search' value={this.state.search} placeholder='search' onChange={this.handleSearchChange}/>
                    </Col>
                </div><br/>
                <table className='table'>
                        <thead class='thead-light'>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>ShowDetails</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.props.product.filter(ele=>ele.name.split(' ')[0]==this.state.search) != '' ?  this.state.newsearch.map((ele,i)=>{
                                    return (
                                    <tr>
                                    <td>{i+1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.price}</td>
                                    <td>{moment(ele.createdAt).fromNow()}</td>
                                    <td><Button variant='primary' onClick={()=>{this.handleViewdetails(ele._id)}}>View Details</Button></td>
                                    <td><Button variant='primary' onClick={()=>{this.handleUpdate(ele._id)}}>Update</Button></td>
                                    <td><Button variant='danger' onClick={()=>{this.handleDelete(ele._id)}}>Delete</Button></td>              
                                    </tr>
                                    
                                    )
                                }):
                                //   this.props &&this.props.product.length > 0  ?
                                 this.props.product.map((ele,i)=>{ 
                                    return(
                                        <tr>
                                        <td>{i+1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.price}</td>
                                        <td>{moment(ele.createdAt).fromNow()}</td>
                                        <td><Button variant='primary' onClick={()=>{this.handleViewdetails(ele._id)}}>View Details</Button></td>
                                        <td><Button variant='primary' onClick={()=>{this.handleUpdate(ele._id)}}>Update</Button></td>
                                        <td><Button variant='danger' onClick={()=>{this.handleDelete(ele._id)}}>Delete</Button></td>              
                                        </tr>
                                    )
                                })
                                }
                        </tbody>
                    </table>
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        product:state.products,
        id:state.id,
        viewPrdct:state.viewPrdct
    }
}
export default connect(mstp)(ProductList)