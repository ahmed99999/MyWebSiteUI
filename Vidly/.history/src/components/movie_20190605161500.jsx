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
            <React.Fragment>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td onClick={() => {this.deleteMovie(movie._id)}}><button className="btn btn-danger">Delete</button></td>
            </React.Fragment>
         );
    }
}
 
export default Movie;