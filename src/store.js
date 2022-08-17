import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import filterReducer from './reducers/filterSlice'
import githubReducer from './reducers/githubSlice'
export const store = configureStore({
    reducer:
        combineReducers({
            user: userReducer,
            filter: filterReducer,
            github: githubReducer
        })
})