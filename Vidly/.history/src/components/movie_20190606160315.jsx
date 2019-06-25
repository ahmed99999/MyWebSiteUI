import React, { Component } from 'react';
import { getMovie } from './../services/fakeMovieService';
// import { deleteMovie } from './../services/fakeMovieService';


class Movie extends Component {

    state = { 
        movie: getMovie( this.props.movie._id)
    };

    render() {
        const { movie } = this.state;
        return (
            <tr id={movie._id} >
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button className="btn btn-danger" onClick={this.props.onDelete} >Delete</button></td>
                <td><button className="btn btn-secondary" onClick={this.props.onIncrement}> + </button></td>
                <td><button className="btn btn-secondary" onClick={this.props.onDecrement} disabled={movie.numberInStock ? '' : 'disabled'}> - </button></td>
            </tr>
         );
    }
}
 
export default Movie;