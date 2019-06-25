import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import { Movie } from './movie';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    // handleDelete = movie => {
    //     let finalMovies = this.state.movies.filter(m => m._id !== movie._id);
    //     this.setState({ movies: finalMovies });
    // }

    render() {
        const { movies } = this.state;

        const size = this.state.movies.length;
        if(size === 0 ){
            return <p>there are No movies in the dateBase.</p>
        }
        
        return (
            <React.Fragment>
                <p>showing {size} movies in the dataBase.</p>
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
                                <Movie id={movie._id} />
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;