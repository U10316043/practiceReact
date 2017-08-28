import { createStore, applyMiddleware, compose} from 'redux'
import combineReducer from '../reducers/index'
import {logger, crashReporter, thunk} from '../middlewares/index'

//redux chrome tool 
const store = createStore(combineReducer, {}, compose(
    applyMiddleware(logger, crashReporter, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
 
export default store;