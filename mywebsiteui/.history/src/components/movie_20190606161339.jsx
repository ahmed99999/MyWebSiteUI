import React, { Component } from 'react';
import { getMovie } from './../services/fakeMovieService';
// import { deleteMovie } from './../services/fakeMovieService';
import Like from './like';

class Movie extends Component {

    state = { 
        movie: getMovie( this.props.movie._id)
    };

    render() {
        const { movie } = this.state;
        const { onDecrement, onDelete, onLiked, onIncrement } = this.props;
        return (
            <tr id={movie._id} >
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked = {true} onClick={onLiked} /></td>
                <td><button className="btn btn-danger" onClick={onDelete} >Delete</button></td>
                <td><button className="btn btn-secondary" onClick={onIncrement}> + </button></td>
                <td><button className="btn btn-secondary" onClick={onDecrement} disabled={movie.numberInStock ? '' : 'disabled'}> - </button></td>
            </tr>
         );
    }
}
 
export default Movie;