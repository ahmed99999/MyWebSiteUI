import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import Movie from './movie';

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
        
    };

    render() {
        const { movies } = this.state;
        const resetButton = <button className="btn btn-primary" onClick={this.handelReset}>Reset</button> ;

        const size = this.state.movies.length;
        if(size === 0 ){
            return <React.Fragment><p>there are No movies in the dateBase.</p> {resetButton}</React.Fragment> ;
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map( (movie) => (
                            <Movie key={movie._id} movie={movie} onDelete ={ () => this.handleDelete(movie)} onIncrement ={()=>this.handelIncrement(movie)}/>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;