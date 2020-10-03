import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
// import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import {startGetProduct,startGetProducts} from '../actions/ProductAccntAction'

class ViewProduct extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        const id=this.props.match.params.id
        this.props.dispatch(startGetProduct(id))
       
    }
    
    render(){     
        console.log('this.props',this.props)
        return(
            <div>
                 <div align='center'>
                     <h2>View</h2>
                </div>
                <table className='table'>
                        <thead class='thead-light'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Created At</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(this.props.viewPrdct).length!=0 &&
                        (
                                <tr>
                                 <td> {this.props.viewPrdct.name}</td>  
                                 <td> {this.props.viewPrdct.price}</td>
                                 <td> {moment(this.props.viewPrdct.createdAt).fromNow()}</td>  
                                </tr>
                            
                        )}
                        </tbody>
                    </table>
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        id:state.id,
        viewPrdct:state.viewPrdct
    }
}
export default connect(mstp)(ViewProduct)