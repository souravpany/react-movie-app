import movieAPI from "../../common/api/movieAPI";
import { API_KEY } from "../../common/api/MovieAPIKey";


// Get Movies
const getMovies = async () => {

    const movieText = 'Harry';

    const response = await movieAPI.get(`?apikey=${API_KEY}&s=${movieText}&type=movie`);

    return response.data
}

// Get Shows
const getShows = async () => {

    const seriesText = 'Friends';

    const response = await movieAPI.get(`?apikey=${API_KEY}&s=${seriesText}&type=series`);

    return response.data
}

// Get Shows
const getMoviesOrShowsDetails = async (id) => {

    const response = await movieAPI.get(`?apikey=${API_KEY}&i=${id}&plot=full`);

    return response.data
}


const moviesService = {
    getMovies,
    getShows,
    getMoviesOrShowsDetails,
}

export default moviesService;