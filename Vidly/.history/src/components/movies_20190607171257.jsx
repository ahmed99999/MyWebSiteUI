import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import Movie from './movie';
import Pagination from './comon/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './comon/listGroup';

class Movies extends Component {

    state = {
        movies: [],
        pageSize : 4,
        currentPage : 1,
        currentGenre : 'All Genres'
    }

    componentDidMount(){
        this.setState({movies : getMovies()});
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

    handleGenre = ( genreName ) => {
        this.setState({ currentGenre : genreName });
    }

    render() {
        const { movies, pageSize, currentPage, currentGenre} = this.state;
        const genreMovies = movies.filter( m => {
            return m.genre.name === currentGenre || currentGenre === 'All Genres';
        });
        const paginatedMovies = paginate( genreMovies, currentPage, pageSize );
        const size = ( currentGenre === 'All Genres' ) ? movies.length : paginatedMovies.length;
   
        if( size === 0 ){
            return <p>there are No movies in the dateBase.</p>;
        }

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
                        handleGenre = {this.handleGenre}
                        currentGenre = {currentGenre}
                    />
                </div>
            </div>
        );
    }
}
 
export default Movies;