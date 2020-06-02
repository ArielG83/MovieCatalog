import { MOVIES } from '../consts'

const initialState = {
  popularMovies: [],
  favoriteMovies: {},
}

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action
 
  switch (type) {
    case MOVIES.GET_POPULAR:
      return {
        ...state,
        popularMovies: payload ? [...state.popularMovies,...payload.results] : state.popularMovies,
      }
    case MOVIES.GET_FAVORITES:
      return {
        ...state,
        favoriteMovies: payload ? {...payload} : state.favoriteMovies,
      }
    case MOVIES.ADD_FAVORITES:
      return {
        ...state,
        favoriteMovies: payload,
      }
    case MOVIES.REMOVE_FAVORITES:
      return {
        ...state,
        favoriteMovies: payload,
      }
    default:
      return state
  }
}

export default moviesReducer