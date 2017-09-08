import counter666 from './examples01/counter'
import images from './examples01/images'
import sumclone from './examples01/sum'
import sub from './examples01/sub'
import goreducer from './examples01/go'
import todoReducer from './todolist/todo'
import listReducer from './todolist/list'
import revealreducer from './examples01/revealname'


import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    examplesaaa: combineReducers({
        countss:counter666,
        images,
        sub,
        goreducer,
        revealreducer,
        sum:combineReducers({
            sumclone
        })
    }),
    todoListReducer: combineReducers({
        todoReducer,
        listReducer
    }),
    routing: routerReducer
})