import counter666 from './examples01/counter'
import images from './examples01/images'
import sumclone from './examples01/sum'
import sub from './examples01/sub'
import sRevealUsername from './examples01/revealname'

import todosList from './todos/todosList'
import todosFilter from './todos/todosFilter'

import youtubeList from './youtube/list'
import youtubeVideo from './youtube/video'
import youtubeLoad from './youtube/load'

import inform from './userinform/storeinform'

import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    examplesaaa: combineReducers({
        countss:counter666,
        images,
        sub,
        sum:combineReducers({
            sumclone
        }),
        sRevealUsername
    }),
    todos: combineReducers({
        todosList,
        todosFilter
    }),
    youtube: combineReducers({
        youtubeList,
        video: youtubeVideo,
        load: youtubeLoad
    }),
    userinform: combineReducers({
        inform,
    }),
    routing: routerReducer
})