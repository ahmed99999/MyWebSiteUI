import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {

    }

    render() {
        const { movies } = this.state;
        return ( 
            <table>
                <tr key = '-1'>
                    <td>Title</td>
                    <td>Genre</td>
                    <td>Stock</td>
                    <td>Rate</td>
                    <td></td>
                </tr>
                {movies.map( (movie, index) => {
                    <tr key ={index} >
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button className="btn btn-danger"></button></td>
                    </tr>
                } )}
            </table> 
        );
    }
}
 
export default Movies;