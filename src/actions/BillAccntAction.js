import axios from 'axios'

//Set Bills
export const setBills = (bills) => {
    return { type: 'SET_BILLS', payload: bills }
}
//SET bill
export const setBill = (id) => {
    return { type: 'SET_PARTICULAR_BILL', payload: id }
}

export const startGetBillAccnt = (formData) => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/bills`,formData,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const billAccnt = response.data
                console.log('Create bill',billAccnt) 
                // dispatch(setCustomers(customers))
            })
    }
}
//Get bills
export const startGetBills = () => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const bills = response.data
                console.log('response of bills',bills) 
                dispatch(setBills(bills))
            })
    }
}
//Get particular bill
export const startGetBill = (id) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const bills = response.data
                console.log('particular bills',bills) 
                dispatch(setBill(bills))
                
            })
    }
}