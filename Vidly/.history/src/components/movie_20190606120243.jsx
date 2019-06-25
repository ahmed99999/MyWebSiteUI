import React, { Component } from 'react';
import { getMovie } from './../services/fakeMovieService';
// import { deleteMovie } from './../services/fakeMovieService';


class Movie extends Component {

    state = { 
        movie: getMovie( this.props.movie.id)
    }

    render() { 
        const { movie } = this.state;
        return (
            <tr id={movie._id} >
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td onClick={this.props.onDelete}><button className="btn btn-danger">Delete</button></td>
            </tr>
         );
    }
}
 
export default Movie;