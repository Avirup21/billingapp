import axios from 'axios'
 
// SET_USERAccnt
export const setUserAccnt = (userAccnt) => {
    return { type: 'SET_USERACCNT', payload: userAccnt }
}

//Get Account
export const startGetAccount = () => {
    // console.log(formData)
    const token = localStorage.getItem("token")
    console.log('token',token)
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
              })
              
            .then((response) => {
                const userAccnt = response.data
                console.log('userAccnt2',userAccnt) 
                dispatch(setUserAccnt(userAccnt))
                
            })
    }
}
// GET_USERS 
export const startGetLogin = (formData,redirect) => {
    console.log(formData)
    const token = localStorage.getItem("token")
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login',formData)
            .then((response) => {
                // if(response.data.hasOwnProperty('error')){
                //     // alert(response.data.error)
                // }
                // else{
                    const users = response.data
                    console.log('token Object',users)
                    localStorage.setItem("token", users.token)
                    // console.log(response.data)
                    // localStorage.setItem("token", response.data.token)
                    // axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
                    //     headers: {
                    //         'Authorization': `Bearer ${token}`
                    //     }
                    //       })
                    //     .then((response)=>{
                    //         const userAccnt = response.data
                    //         console.log('userAccnt1',userAccnt) 
                    //         dispatch(setUserAccnt(userAccnt))
                    //     })  
                        // .catch((error)=>{
                            // alert(error)
                        // })
                // }
            })
            // .catch((error)=>{
            //     console.log(error)
            // })
    }
}