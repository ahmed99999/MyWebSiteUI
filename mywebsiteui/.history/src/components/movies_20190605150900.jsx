import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {

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
                    <tr key = '-1'>
                        <td><b>Title</b></td>
                        <td><b>Genre</b></td>
                        <td><b>Stock</b></td>
                        <td><b>Rate</b></td>
                        <td></td>
                    </tr>
                    {movies.map( (movie, index) => (
                        <tr key ={index}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td onClick ={(movie) => {this.handleDelete(movie)}}><button className="btn btn-danger">delete</button></td>
                        </tr>
                    ) )}
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;