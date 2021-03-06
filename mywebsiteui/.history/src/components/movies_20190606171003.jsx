import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import Movie from './movie';
import Pagination from './pagination';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handelIncrement = movie =>{
        const movies = this.state.movies.map( m => {
            if (m._id === movie._id) {
                m.numberInStock++;
            }
            return m;
        });
        this.setState({ movies });
    };

    handelReset = () => {
        const movies = this.state.movies.map( m => {
            m.numberInStock = 0
            return m;
        });
        this.setState({ movies });
    };

    handelDecrement = movie => {
        const movies = this.state.movies.map( m => {
            if (m._id === movie._id && m.numberInStock > 0 ) {
                m.numberInStock--;
            }
            return m;
        });
        this.setState({ movies });
    };

    render() {
        const { movies } = this.state;
        const size = this.state.movies.length;
        if(size === 0 ){
            return <p>there are No movies in the dateBase.</p>;
        }
        
        return (
            <React.Fragment>
                <p>showing {size} movies in the dataBase.</p>
                <button className="btn btn-primary" onClick={() => this.handelReset()}>Reset</button>
                <table className="table">
                    <thead>
                        <tr key = '-1'>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                            <th />
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map( (movie) => (
                            <Movie 
                                key = { movie._id } 
                                movie = { movie } 
                                onDelete = { ()=>this.handleDelete(movie) }
                                onIncrement = { ()=>this.handelIncrement(movie) }
                                onDecrement = { ()=>this.handelDecrement(movie) }
                            />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;