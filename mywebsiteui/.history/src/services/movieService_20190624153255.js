import Http from './httpService';
import config from '../config.json';
import { getGenres } from './genreService';

export async function getMovies() {
    const movies = await Http.get( config.apiMoviesEndPoint );
    return movies;
}

export async function getMovie( id ) {

    const movie = await Http.get( `${config.apiMoviesEndPoint}/${id}` );
    return movie;
}

export function saveMovie(movie) {
    if ( movie._id ){
        const body = { ...movie };
        delete body._id;
        return Http.put( `${config.apiMoviesEndPoint}/${movie._id}`, body);
    }

    return Http.post(config.apiMoviesEndPoint, movie);
}

export async function deleteMovie(id) { 
    const deletedMovie = await Http.delete ( `${config.apiMoviesEndPoint}/${id}` );
    return deletedMovie;
}