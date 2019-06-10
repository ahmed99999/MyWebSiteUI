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
                <tr>
                    <tr>Title</tr>
                    <tr>Genre</tr>
                    <tr>Stock</tr>
                    <tr>Rate</tr>
                    <tr></tr>
                </tr>
                {movies.map( movie => (
                    return true;
                ))}
            </table> 
        );
    }
}
 
export default Movies;