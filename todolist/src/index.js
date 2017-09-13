import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store/config'
import App from './components/App';
// import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { Router, Route, browserHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import {render} from 'react-dom'


// const reducers = {
//   form: formReducer
// }
// const reducer = combineReducers(reducers)
// const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();


