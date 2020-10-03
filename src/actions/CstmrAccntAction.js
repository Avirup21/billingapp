import axios from 'axios'
export const startGetCstmrAccnt = (formData) => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/customers`,formData,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const customerAccnt = response.data
                console.log('Create customer',customerAccnt) 
                // dispatch(setCustomers(customers))
            })
    }
}