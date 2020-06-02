import { httpResponseCode, MovieDBApiKey } from '../utils/constants'

export const getPopularMovies = async (page = 1) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${MovieDBApiKey}&page=${page}`
        const headers = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, headers)
        if(response.status == httpResponseCode.OK){
            const data = await response.json()
            return data
        }else{
            console.log(`${response.status} status`)
        }
    } catch (error) {
        console.log(error)
    }
}