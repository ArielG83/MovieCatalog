import { MOVIES } from '../consts'
import { getPopularMovies } from '../../API/theMovieDb'
import { getData, storeData } from '../../API/asyncStorage'

const getPopular = page => async dispatch => {
  try {
    const movies = await getPopularMovies(page)
    dispatch({
      type: MOVIES.GET_POPULAR,
      payload: movies,
    })
  } catch (error) {
    console.log(error)
  }
}

const getFavorites = () => async dispatch => {
  try {
    const favorites = await getData('favorites')

    dispatch({
      type: MOVIES.GET_FAVORITES,
      payload: favorites,
    })
  } catch (error) {
    console.log(error)
  }
}

const addToFavorites = movie => async (dispatch, getState) => {
  const { movies } = getState()
  const newFavorites = movie ? {...movies.favoriteMovies, [movie.id]: movie} : movies.favoriteMovies

  await storeData('favorites', newFavorites)
  
  dispatch({
    type: MOVIES.ADD_FAVORITES,
    payload: newFavorites,
  })
}

const removeFromFavorites = movieId => async (dispatch, getState) => {
  const { movies } = getState()
  const newFavorites = {...movies.favoriteMovies}
  movieId && delete newFavorites[movieId]

  await storeData('favorites', newFavorites)

  dispatch({
    type: MOVIES.REMOVE_FAVORITES,
    payload: newFavorites,
  })
}

export {
  getPopular,
  getFavorites,
  addToFavorites,
  removeFromFavorites,
}