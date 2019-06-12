import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import MoviesTable from './moviesTable';
import Pagination from './comon/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './comon/listGroup';

class Movies extends Component {

    state = {
        movies: [],
        pageSize : 4,
        currentPage : 1,
        currentGenre : 'All Genres',
        sortColumn : {
            sortWith : 'title',
            order : 'asc'
        }
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

    handelSort = sortWith => {
        this.setState({sortColumn : { sortWith }});
    }

    render() {
        const { movies, pageSize, currentPage, currentGenre, sortColumn} = this.state;
        const genreMovies = movies.filter( m => {
            return m.genre.name === currentGenre || currentGenre === 'All Genres';
        }).sort(( m1, m2 )=>{
            if(m1[sortColumn.sortWith] < m2m1[sortColumn.sortWith]) return -1;
            if(m1[sortColumn.sortWith] > m2m1[sortColumn.sortWith]) return  1;
            return 0;
        });
        const paginatedMovies = paginate( genreMovies, currentPage, pageSize );
        const size = ( currentGenre === 'All Genres' ) ? movies.length : genreMovies.length;
   
        if( size === 0 ){
            return <p>there are No movies in the dateBase.</p>;
        }

        return (
            <div className="row">
                <div className="col-9">
                    <p>showing {paginatedMovies.length} movies in the dataBase.</p>
                    <button className="btn btn-primary" onClick={() => this.handelReset()}>Reset</button>
                    <MoviesTable 
                        handelDecrement={(movie)=>this.handelDecrement(movie)}
                        handelIncrement={(movie)=>this.handelIncrement(movie)}
                        handleDelete={(movie)=>this.handleDelete(movie)}
                        paginatedMovies={paginatedMovies}
                        handelSort={key=>this.handelSort(key)}
                    />
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