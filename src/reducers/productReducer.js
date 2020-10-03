const productReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_PRODUCTS' : {
            return [...action.payload]
        }
        case 'DELETE_PRODUCTS':{
            return state.filter(ele=>ele._id!=action.payload._id)
        }
        // case 'VIEW_PRODUCTS' : {
        //     return {...action.payload}
        // }
        default: {
            return [...state]
        }
    }
}

export default productReducer