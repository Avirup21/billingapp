import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {startGetBills} from '../actions/BillAccntAction'

class BillListing extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        // alert('bill response')
        this.props.dispatch(startGetBills())
    }
    render(){
        console.log('bills',this.props)
        return(
            <div>
                <table className='table'>
                    <thead class='thead-light'>
                        <tr>
                         <th>Sl No</th>   
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>CreatedAt</th>
                        <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.props.bills.map((ele,i)=>{
                           return(
                               <tr>
                                   <td>{i+1}</td>
                                   <td>{moment(ele.date).fromNow()}</td>
                                   <td>{ele.customer}</td>
                                   <td><ul>
                                   {ele.lineItems.map((ele1)=>{
                                       return(
                                       <li>{ele1.product}</li>
                                       
                                       )
                                   })}
                                   </ul></td>
                                   <td><ul>
                                   {ele.lineItems.map((ele1)=>{
                                       return(
                                       <li>{ele1.price}</li>
                                       
                                       )
                                   })}
                                   </ul></td>
                                   <td><ul>
                                        {ele.lineItems.map((ele1)=>{
                                       return(
                                       <li>{ele1.quantity}</li>
                                       
                                       )
                                   })}
                                   </ul></td>
                                   <td>{moment(ele.createdAt).fromNow()}</td>
                                   <td><ul>
                                       {ele.lineItems.map((ele1)=>{
                                       return(
                                       <li>{ele1.subTotal}</li>
                                       
                                       )
                                   })}
                                   </ul></td>
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
        bills:state.bills
    }
}
export default connect(mstp)(BillListing)