import { combineReducers } from 'redux'
import user from './user'
import input from './input'

const rootReducer = combineReducers({
    user,
    input
})

export default rootReducer