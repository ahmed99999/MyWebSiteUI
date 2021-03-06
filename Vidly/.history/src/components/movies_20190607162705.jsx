import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import Movie from './movie';
import Pagination from './comon/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './comon/listGroup';

class Movies extends Component {

    state = {
        movies: getMovies(),
        pageSize : 4,
        currentPage : 1,
        currentGenre : 'All Genres'
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

    PageChange = pageNumber => {
        this.setState({ currentPage : pageNumber });
    };

    handleGenre = ( genreName, currentGenre ) => {
        const movies = this.state.movies.filter( movie => {
            return movie.genre.name === genreName || genreName === 'All Genres';
        });

        this.setState({ movies, currentGenre });
        // console.log(genreName);
    }

    render() {
        const { movies, pageSize, currentPage, currentGenre} = this.state;
        const  paginatedMovies = paginate( movies, currentPage, pageSize );
        const size = this.state.movies.length;
        // if( size === 0 ){
        //     return <p>there are No movies in the dateBase.</p>;
        // }

        return (
            <div className="row">
                <div className="col-9">
                    <p>showing {paginatedMovies.length} movies in the dataBase.</p>
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
                            {paginatedMovies.map( (movie) => (
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
                    <Pagination 
                        itemsCount={size} 
                        pageSize={pageSize}
                        currentPage = {currentPage}
                        onPageChange = { (pageNumber)=>this.PageChange(pageNumber)}
                    />
                </div>
                <div className="col-3">
                    <ListGroup
                        handleGenre = {(genreName, currentGenre)=>this.handleGenre(genreName, currentGenre)}
                        currentGenre = {currentGenre}
                    />
                </div>
            </div>
        );
    }
}
 
export default Movies;