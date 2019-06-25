import React, { Component } from 'react';
import { getMovie } from './../services/fakeMovieService';

class Movie extends Component {
    state = {  }

    render() { 
        return ( 
            <React.Fragment>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td onClick={() => {this.handleDelete(movie)}}><button className="btn btn-danger">Delete</button></td>
            </React.Fragment>
         );
    }
}
 
export default Movie;