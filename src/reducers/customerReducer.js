const customerReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_CUSTOMERS' : {
            return [...action.payload]
        }
        case 'DELETE_CUSTOMERS':{
            return state.filter(ele=>ele._id!=action.payload._id)
        }
        default: {
            return [...state]
        }
    }
}

export default customerReducer