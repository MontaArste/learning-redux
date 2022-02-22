import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux'; //provides that app now have access to store(app component is wrapped into provide)

//STORE -> GLOBALIZED STATE

// //ACTION
// //type can be replaced with 'name'
// const increment=()=>{
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement=()=>{
//   return {
//     type: 'DECREMENT'
//   }
// }
// //REDUCER
// //2 parameters - start state, action
// const counter = (state = 0, action) =>{
//   switch(action.type){
//     case "INCREMENT":
//       return state +1;
//     case "DECREMENT":
//       return state -1;
//   }
// }

// let store = createStore(counter);

// //display it in console
// store.subscribe(()=> console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());
// 

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//upper line from https://github.com/zalmoxisus/redux-devtools-extension

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
