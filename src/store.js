import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice'
import inputReducer from './inputSlice'
import githubReducer from './githubSlice'

export const store = configureStore({
    reducer:
        combineReducers({
            user: userReducer,
            input: inputReducer,
            github: githubReducer
        })
})