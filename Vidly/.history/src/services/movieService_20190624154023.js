import Http from './httpService';
import config from '../config.json';


const getMovieUrl = ( id='' ) => `${config.apiMoviesEndPoint}/${id}` ;

export async function getMovies() {
    const movies = await Http.get( config.apiMoviesEndPoint );
    return movies;
}

export async function getMovie( id ) {

    const movie = await Http.get( getMovieUrl(id) );
    return movie;
}

export function saveMovie(movie) {
    if ( movie._id ){
        const body = { ...movie };
        delete body._id;
        return Http.put( getMovieUrl(movie._id), body);
    }

    return Http.post(config.apiMoviesEndPoint, movie);
}

export async function deleteMovie(id) { 
    const deletedMovie = await Http.delete ( getMovieUrl(id) );
    return deletedMovie;
}