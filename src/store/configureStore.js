import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'
import customerReducer from '../reducers/customerReducer'
import productReducer from '../reducers/productReducer'
import viewCustReducer from '../reducers/viewCustReducer'
import BillReducer from '../reducers/BillReducer'
import viewProductReducer from '../reducers/viewProductReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        // users:usersReducer,
        userAccnt:usersReducer,
        customers:customerReducer,
        id:customerReducer,
        products:productReducer,
        id:productReducer,
        viewCust:viewCustReducer,
        bills:BillReducer,
        viewPrdct:viewProductReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore