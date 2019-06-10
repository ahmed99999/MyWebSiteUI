import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';

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
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td onClick={() => {this.handleDelete(movie)}}><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;