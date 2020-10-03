const viewCustReducer = (state = {}, action) => {
    switch(action.type) {
        case 'VIEW_CUSTOMERS' : {
            return {...action.payload}
        }
        default: {
            return {...state}
        }
    }
}
export default viewCustReducer