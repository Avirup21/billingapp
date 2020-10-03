import axios from 'axios'
export const startGetProductAccnt = (formData) => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/products`,formData,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const prdctAccnt = response.data
                console.log('Create product',prdctAccnt) 
                // dispatch(setCustomers(customers))
            })
    }
}

//Set products
export const setProducts = (products) => {
    return { type: 'SET_PRODUCTS', payload: products }
}
//View Products
export const setViewProducts= (id) => {
    return { type: 'VIEW_PRODUCTS', payload: id }
}
//Delete 
export const setDeleteProduct = (newPrdct) => {
    return {type:'DELETE_PRODUCTS',payload:newPrdct}
}

//List all products
export const startGetProducts = () => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const products = response.data
                console.log('response of products',products) 
                dispatch(setProducts(products))
            })
    }
}
//Get particular product
export const startGetProduct = (id) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const products = response.data
                console.log('particular product',products) 
                dispatch(setViewProducts(products))
            })
    }
}
//Update product
export const startGetUpdateProduct = (id,formData) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`,formData,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const products = response.data
                console.log('update product',products) 
                // dispatch(setUpdateCustomers(customers))
            })
    }
}
//Delete
export const startGetDeleteProduct = (id) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
            .then((response) => {
                const product = response.data
                console.log('delete a product',product) 
                dispatch(setDeleteProduct(product))
            })
    }
}