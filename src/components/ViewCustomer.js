import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
// import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import {startGetCustomer} from '../actions/customerAction'

class ViewCustomer extends React.Component{
    
    componentDidMount(){
        const id=this.props.match.params.id
        this.props.dispatch(startGetCustomer(id))
       
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
                            {/* <th>Price</th> */}
                            <th>Created At</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(this.props.viewCust).length!=0 &&
                        (
                                <tr>
                                 <td> {this.props.viewCust.name}</td>  
                                 {/* <td> {this.props.viewCust.}</td> */}
                                 <td> {moment(this.props.viewCust.createdAt).fromNow()}</td>  
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
        viewCust:state.viewCust
    }
}
export default connect(mstp)(ViewCustomer)