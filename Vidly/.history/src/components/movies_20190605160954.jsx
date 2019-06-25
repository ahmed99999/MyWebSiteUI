import React, { Component } from 'react';
import { getMovie } from './../services/fakeMovieService';
import {Movie} from './movie';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
        let finalMovies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: finalMovies });
    }

    showMessage = () => {
        const size = this.state.movies.length;
        if(size === 0 ){
            return <p>there are No movies in the dateBase.</p>
        }
        return <p>showing {size} movies in the dataBase.</p>
    }

    render() {
        const { movies } = this.state;
        return (
            <React.Fragment>
                {this.showMessage()}
                <table className="table">
                    <thead>
                        <tr key = '-1'>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map( (movie) => (
                            <tr key ={movie._id}>
                                <Movie />
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;