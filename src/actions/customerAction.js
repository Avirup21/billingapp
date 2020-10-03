import axios from 'axios'

// SET_Customers 
export const setCustomers = (customers) => {
    return { type: 'SET_CUSTOMERS', payload: customers }
}
// Update_Customers 
// export const setUpdateCustomers = (id,obj) => {
//     return { type: 'UPDATE_CUSTOMERS', payload: {id,obj} }
// }
//Get details of customers
export const setViewCustomers = (id) => {
    return { type: 'VIEW_CUSTOMERS', payload: id }
}
//Delete customers
export const setDeleteCustomers = (id) => {
    return {type:'DELETE_CUSTOMERS',payload:id}
}

// GET_Customers 
export const startGetCustomers = () => {
    
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const customers = response.data
                console.log('response of customers',customers) 
                dispatch(setCustomers(customers))
            })
    }
}
//Get particular details of customers
export const startGetCustomer = (id) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const customers = response.data
                console.log('particular customer',customers) 
                dispatch(setViewCustomers(customers))
                
            })
    }
}
//Update a customer
export const startGetUpdateCustomer = (id,formData) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,formData,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const customers = response.data
                console.log('update customer',customers) 
                // dispatch(setUpdateCustomers(customers))
            })
    }
}
// export const startGetUpdateCustomer = (id,formData) => {
//         console.log('id',id)
//         const token = localStorage.getItem("token")
//         console.log(token)
//         return (dispatch) => {
//             axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,formData,{
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                   }
//             })
//                 .then((response) => {
//                     if(response.data.hasOwnProperty('error')){
//                         alert(response.data.error)
//                     }
//                     else{
//                         const users = response.data
//                         console.log('update customer',users)
//                         dispatch(setUpdateCustomers(users))
//                         // console.log('token Object',users)
//                         // localStorage.setItem("token", users.token)
//                         // console.log(response.data)
//                         // localStorage.setItem("token", response.data.token)
//                         axios.get('http://dct-billing-app.herokuapp.com/api/users/customers',{
//                             headers: {
//                                 'Authorization': `Bearer ${token}`
//                             }
//                               })
//                               .then((response)=>{
//                                 const customers = response.data
//                                 console.log('response of customers1',customers) 
//                                 dispatch(setCustomers(customers))
//                             })  
//                             .catch((error)=>{
//                                 alert(error)
//                             })
//                     }
//                 })
               
//         .catch((error)=>{
//             console.log(error)
//         })
//     }
// }   

               
   
//Delete a customer
export const startGetDeleteCustomer = (id) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const customers = response.data
                console.log('delete a customer',customers) 
                dispatch(setDeleteCustomers(customers))
            })
    }
}