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
                    <td>Title</td>
                    <td>Genre</td>
                    <td>Stock</td>
                    <td>Rate</td>
                    <td></td>
                </tr>
                {movies.map( movie => {
                    <tr>

                    </tr>
                } )}
            </table> 
        );
    }
}
 
export default Movies;