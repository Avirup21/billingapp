const usersReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_USERACCNT' : {
            return {...action.payload}
        }
        default: {
            return {...state}
        }
    }
}

export default usersReducer