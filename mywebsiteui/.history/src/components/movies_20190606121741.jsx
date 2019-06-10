import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import Movie from './movie';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = id => {
        const movies = this.state.movies.filter(m => m._id !== id);
        this.setState({ movies });
    }

    render() {
        const { movies } = this.state;
        const resetButton = <button>Reset</button> ;

        const size = this.state.movies.length;
        if(size === 0 ){
            return <p>there are No movies in the dateBase.</p> + {resetButton} ;
        }
        
        return (
            <React.Fragment>
                <p>showing {size} movies in the dataBase.</p> {resetButton}
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
                            <Movie key={movie._id} movie={movie} onDelete ={ () => this.handleDelete(movie._id)} />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;