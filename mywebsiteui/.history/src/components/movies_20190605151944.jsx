import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
        const { movies }= this.state;
        let movieInDb = movies.find(m => m._id === movie._id);
        movies.splice(movies.indexOf(movieInDb), 1);
        this.setState({
            movies: movies
        });
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
                            <td><b>Title</b></td>
                            <td><b>Genre</b></td>
                            <td><b>Stock</b></td>
                            <td><b>Rate</b></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map( (movie, index) => (
                            <tr key ={index}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td onClick={() => {this.handleDelete(movie)}}><button className="btn btn-danger">delete</button></td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;