const userLoginReducer = (state = [], action) => {
    switch(action.type) {
        // case 'SET_USERS' : {
        //     return state.concat(action.payload)
        // }
        default: {
            return [].concat(state)
        }
    }
}

export default userLoginReducer