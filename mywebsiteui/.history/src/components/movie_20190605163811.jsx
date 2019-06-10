import React, { Component } from 'react';
import { getMovie } from './../services/fakeMovieService';
import { deleteMovie } from './../services/fakeMovieService';


class Movie extends Component {

    state = { 
        movie: getMovie( this.props.id)
    }

    render() { 
        const { movie } = this.state;
        return (
            <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td onClick={() => {deleteMovie(movie._id)}}><button className="btn btn-danger">Delete</button></td>
            </tr>
         );
    }
}
 
export default Movie;