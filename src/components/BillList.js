import React from "react"
import {connect} from 'react-redux'
import {GrAdd} from "react-icons/gr"
import {IoIosRemove } from "react-icons/io"
import {startGetProducts} from '../actions/ProductAccntAction'

const BillList = (props) => {
    // props.dispatch(startGetProducts())
    console.log('product',props)
    const products= Object.keys(props.products).length!=0 &&
            props.products.map((ele)=>{
                return( 
                    <option value={ele._id}>{ele.name}</option>
                )
            })  
  return (
    props.lineItems.map((val, idx) => {
      let product = `product-${idx}`, qty = `qty-${idx}`
      return (
        <tr key={val.index}>
             <td>
            <select name="product" id={product} data-id={idx} className="form-control" >
              <option value=''>Select</option>
              {products}
            </select>
          </td>
         
          <td>
            <input type="text"  name="qty" id={qty} data-id={idx} className="form-control " />
          </td>
          
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"> <GrAdd /></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><IoIosRemove /></button>
            }
          </td>
        </tr >
      )
    })
  )
}
const mstp=(state)=>{
    return{
        products:state.products
    }
}
export default connect(mstp)(BillList)