import { combineReducers } from 'redux'
import perfumeReducer from './perfumeReducer'
import commentReducer from './commentReducer'

export default combineReducers({
  perfumeReducer,
  commentReducer
})