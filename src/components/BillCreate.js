import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import {startGetCustomers} from '../actions/customerAction'
import {startGetProducts} from '../actions/ProductAccntAction'
import {startGetBillAccnt} from '../actions/BillAccntAction'
import {startGetBill} from '../actions/BillAccntAction'
import BillList from './BillList'

class BillCreate extends React.Component{
    constructor(){
        super()
        this.state={
            // date:'',
            // customerId:'',
            // productId:'',
            // qty:''
            flagS:false,
            flagE:false,
            lineItems: [{ index: Math.random(), product: "", qty: "" }],
            date: "",
            customer: "",
        }
        
    }
    componentDidMount(){
            this.props.dispatch(startGetCustomers())
            this.props.dispatch(startGetProducts())
        }
    handleChange = (e) => {
        console.log('dataset',e.target.dataset)
        if (["product", "qty"].includes(e.target.name)) {
            let lineItems = [...this.state.lineItems]
            lineItems[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })
    }

   
    addNewRow = (e) => {
        this.setState((prevState) => ({
            lineItems: [...prevState.lineItems, { index: Math.random(), product: "", qty: ""}],
        }));
    }
     handleSubmit=(e)=>{
        e.preventDefault()
        const customer=this.state.customer
        // const productData={
        //     product:this.state.products,
        //     quantity:this.state.qty

        // }
        // const arr =[]
        // arr.push(productData)
        const formData={
            date:this.state.date,
            customer:this.state.customer,
            lineItems : this.state.lineItems
        }
        
        console.log('formData',formData)
        if( this.state.date == "" || this.state.customer == "" || this.state.lineItems == "" ){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
        }
        this.props.dispatch(startGetBillAccnt(formData))
        this.props.dispatch(startGetBill(customer))
        const redirect=()=>{
            this.props.history.push(`/billListing/${this.state.customer}`)
        }
        redirect()
    }
    clickOnDelete(record) {
        this.setState({
            lineItems: this.state.lineItems.filter(r => r !== record)
        });
    }
    render(){
        // console.log('Customer Component',this.props.userAccnt)
        // console.log('Cust Ls',localStorage)
        // console.log('customer',this.props.customer)
       const customers= Object.keys(this.props.customer).length!=0 &&
            this.props.customer.map((ele)=>{
                return( 
                    <option value={ele._id} >{ele.name}</option>
                )
            })  
            
        let { lineItems } = this.state //let { notes, date, description, taskList } = this.state
        return(
            <div className="content">
            {/* <NotificationContainer/> */}
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="card">
                            <div className="card-header text-center">Invoice</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group ">
                                            <label className="required">Date</label>
                                            <input type="date"  name="date" id="date" className="form-control" placeholder="Enter Date" />
                                        </div>
                                    </div>
                    
                             <div className="col-sm-4">
                             <div className="form-group ">
                             <label className="required">Customers</label>
                         <select name="customer"   className="form-control" >
                            <option value=''>Select</option>
                            {customers}
                         </select>
                         </div>
                         </div>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="required" >Product</th>
                                            <th className="required" >Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <BillList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} lineItems={lineItems} />
                                    </tbody>
                                    {/* <tfoot>
                                        <tr><td colSpan="4">
                                            <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                        </td></tr>
                                    </tfoot> */}
                                </table>
                            </div>
                            <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center" >Submit</button></div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </form>

            <SweetAlert 
                    success
                    title="Success Data!"
                    show={this.state.flagS}
                    onConfirm={(response) => this.onRecieveInput(response)}>
                        Bill Created!!!!!!!
                    
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
export default connect(mstp)(BillCreate)