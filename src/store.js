import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import reducer from './reducers'
import userReducer from './userSlice'
import inputReducer from './inputSlice'

// export const store = configureStore({
//     reducer: {
//         user: userReducer,
//         input: inputReducer
//     }
// })

export const store = createStore(reducer)