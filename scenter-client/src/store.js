import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import perfumesReducer from './reducers/perfumesReducer.js'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  perfumes: perfumesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store