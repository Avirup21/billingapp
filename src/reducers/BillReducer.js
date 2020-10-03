const BillReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_BILLS' : {
            return [...action.payload]
        }
        case 'SET_PARTICULAR_BILL' : {
            return state.filter(ele=>ele._id==action.payload._id)
        }
        // case 'DELETE_CUSTOMERS':{
        //     return state.filter(ele=>ele._id!=action.payload._id)
        // }
        default: {
            return [...state]
        }
    }
}

export default BillReducer