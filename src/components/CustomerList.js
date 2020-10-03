import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import {startGetCustomers} from '../actions/customerAction'
import {startGetCustomer} from '../actions/customerAction'
import {startGetDeleteCustomer} from '../actions/customerAction'
import {startGetUpdateCustomer} from '../actions/customerAction'
import Form from 'react-bootstrap/Form'

class CustomerList extends React.Component{
    constructor(){
        super()
        this.state={
              name:'',
              mobile:'',
              email:'',
              editMode:false,
              search:'',
              id:'',
              newsearch:''
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetCustomers())
    }
    handleSearchChange=(e)=>{
        console.log('search value', e.target.value )
        // let newlyDisplayed=this.props.customer.filter(ele=>ele.name.split(' ')[0]==e.target.value)
        console.log('newDisplay',this.props.customer.filter(ele=>ele.name.split(' ')[0]==e.target.value))
        
        this.setState({
            [e.target.name]:e.target.value,
            newsearch:this.props.customer.filter(ele=>ele.name.split(' ')[0]==e.target.value)
        })
    }
    // handleX=(e)=>{
    //     console.log(e.target.value)
    //     this.setState({
    //         [e.target.name] : e.target.value,
    //     })
    // }
    handleSubmit=(e)=>{
        e.preventDefault()
        const id=this.props.customer[0]._id
        // alert(id)
        const formData={
            name:this.state.name,
            mobile:this.state.mobile,
            email:this.state.email
        }
        console.log(formData)
       
    }
    handleDelete=(id)=>{
        // this.setState({id})
        // console.log(id)
        this.props.dispatch(startGetDeleteCustomer(id))
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleUpdate=(id)=>{
        this.setState({id})
       
        const redirect=()=>{
            this.props.history.push(`/updateCustomer/${id}`)
        }
        redirect()
       
       
    }
    handleViewdetails=(id)=>{
        // console.log(id)
        this.props.dispatch(startGetCustomer(id))
       
        const redirect=()=>{
            this.props.history.push(`/ViewCustomer/${id}`)
        }
        redirect()
    }
    render(){     
        // console.log('this.props.customers',this.props.customer)
        // console.log('view customer',this.props)
        // console.log('newsearch',this.state.newsearch)
        // this.props.customer.filter(ele=>ele.name.split(' ')[0]==this.state.search 
        return(
            <div>
                <div align='center'>
                <h2>Customer List</h2>
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
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>ShowDetails</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.props.customer.filter(ele=>ele.name.split(' ')[0]==this.state.search) != '' ?  this.state.newsearch.map((ele,i)=>{
                                    return (
                                    <tr>
                                    <td>{i+1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.mobile}</td>
                                    <td>{ele.email}</td>
                                    <td>{moment(ele.createdAt).fromNow()}</td>
                                    <td><Button variant='primary' onClick={()=>{this.handleViewdetails(ele._id)}}>View Details</Button></td>
                                    <td><Button variant='secondary' onClick={()=>{this.handleUpdate(ele._id)}}>Update</Button></td>
                                    <td><Button variant='danger' onClick={()=>{this.handleDelete(ele._id)}}>Delete</Button></td>              
                                    </tr>
                                    
                                    )
                                }): this.props.customer.map((ele,i)=>{
                                    return(
                                        <tr>
                                        <td>{i+1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.mobile}</td>
                                        <td>{ele.email}</td>
                                        <td>{moment(ele.createdAt).fromNow()}</td>
                                        <td><Button variant='primary' onClick={()=>{this.handleViewdetails(ele._id)}}>View Details</Button></td>
                                        <td><Button variant='secondary' onClick={()=>{this.handleUpdate(ele._id)}}>Update</Button></td>
                                        <td><Button variant='danger' onClick={()=>{this.handleDelete(ele._id)}}>Delete</Button></td>              
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        customer:state.customers,
        viewCust : state.viewCust,
        id:state.id
    }
}
export default connect(mstp)(CustomerList)