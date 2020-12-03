import {combineReducers} from 'redux'
import signinReducer from './userReducer'

export default combineReducers({
    signIn: signinReducer
})