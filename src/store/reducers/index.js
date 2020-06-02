import { combineReducers } from 'redux'
import userReducer from './userReducer'
import moviesReducer from './moviesReducer'

const reducerWrapper = reducer => (state, action) => {
  return reducer(state, action)
}

export default combineReducers({
  user: reducerWrapper(userReducer),
  movies: reducerWrapper(moviesReducer),
})