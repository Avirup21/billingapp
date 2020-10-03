import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import App from './App'
import {startGetAccount} from './actions/userLoginAction'
import {Provider} from 'react-redux'

const store=configureStore()
console.log('Initial State',store.getState())

store.subscribe(()=>{
  console.log(store.getState())
})
//handles page reloads
//check if user logged in

if(localStorage.getItem('token')){
  store.dispatch(startGetAccount())  
}

const jsx=(
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))
