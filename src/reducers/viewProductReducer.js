const viewProductReducer = (state = {}, action) => {
    switch(action.type) {
        case 'VIEW_PRODUCTS' : {
            return {...action.payload}
        }
        default: {
            return {...state}
        }
    }
}
export default viewProductReducer