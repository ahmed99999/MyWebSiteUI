import Http from './httpService';
import config from '../config.json';
import { getGenres } from './genreService';

export async function getMovies() {
    const movies = await Http.get( config.apiMoviesEndPoint );
    return movies;
}

export async function getMovie( id ) {

    const movie = await Http.get( `${config.apiMoviesEndPoint}/${id}` );
    return movie ;    
    // console.log( movies.find(m => m._id === id) );
    // return movies.find(m => m._id === id);
}

// export function saveMovie(movie) {
//     let movieInDb = movies.find(m => m._id === movie._id) || {};
//     movieInDb.title = movie.title;

//     movieInDb.genre = getGenres().find( g => g._id === movie.genreId );
//     movieInDb.numberInStock = movie.numberInStock;
//     movieInDb.dailyRentalRate = movie.dailyRentalRate;

//     if (!movieInDb._id) {
//         movieInDb._id = Date.now().toString();
//         movies.push(movieInDb);
//     }

//     return movieInDb;
// }

export async function deleteMovie(id) {
    const deletedMovie = await Http.delete ( `${config.apiMoviesEndPoint}/${id}` );
    // let movieInDb = movies.find(m => m._id === id);
    // movies.splice(movies.indexOf(movieInDb), 1);
    // return movieInDb;
    return deleteMovie;
}