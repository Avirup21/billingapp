import axios from 'axios'

// SET_USERAccnt
// export const setUserAccnt = (userAccnt) => {
//     return { type: 'SET_USERACCNT', payload: userAccnt }
// }


// GET_USERS 
export const startGetUsers = (formData) => {
    // console.log(formData)
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register',formData)
            .then((response) => {
                const users = response.data
                console.log('user login ',users) 
                // dispatch(setUsers(users))
            })
    }
}