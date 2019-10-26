import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import perfumesReducer from './reducers/perfumesReducer.js'
import commentsReducer from './reducers/commentsReducer.js'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  perfumes: perfumesReducer,
  comments: commentsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store