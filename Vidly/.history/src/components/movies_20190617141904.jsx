import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import MoviesTable from './moviesTable';
import Pagination from './comon/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './comon/listGroup';
import { Link } from 'react-router-dom';
import SearchBar from './comon/searchBar';

class Movies extends Component {

    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        currentGenre: 'All Genres',
        searchOrGenre: true,
        searchBarValue :'',
        sortColumn: {
            sortWith: 'title',
            order: 'asc'
        }
    }

    componentDidMount() {
        this.setState({ movies: getMovies() });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handelIncrement = movie => {
        const movies = this.state.movies.map(m => {
            if (m._id === movie._id) {
                m.numberInStock++;
            }
            return m;
        });
        this.setState({ movies });
    };

    handelReset = () => {
        const movies = this.state.movies.map(m => {
            m.numberInStock = 0
            return m;
        });
        this.setState({ movies });
    };

    handelDecrement = movie => {
        const movies = this.state.movies.map(m => {
            if (m._id === movie._id && m.numberInStock > 0) {
                m.numberInStock--;
            }
            return m;
        });
        this.setState({ movies });
    };

    PageChange = pageNumber => {
        this.setState({ currentPage: pageNumber });
    };

    handleGenre = (genreName) => {
        this.setState({ currentGenre: genreName, searchOrGenre: true , searchBarValue: "", currentPage: 1 });
    };

    handelSort = sortWith => {
        this.setState({ sortColumn: { sortWith } });
    };

    handelSearchBarChange = searchBarValue  => {
        const searchOrGenre = false;
        this.setState({ searchOrGenre, searchBarValue, currentPage: 1 });
    };

    filterMovies = ( movies, currentGenre ) => {
        const { searchOrGenre, searchBarValue } = this.state;
        if ( searchOrGenre ) {
            return movies.filter(m => {
                return m.genre.name === currentGenre || currentGenre === 'All Genres';
            });
        } else {
            return movies.filter( m => {
                return m.title.toLowerCase().indexOf( searchBarValue ) >= 0 ;
            });
        }
    };

    getPagedData = () => {
        const { movies, pageSize, currentPage, currentGenre, sortColumn } = this.state;
        const genreMovies =this.filterMovies( movies, currentGenre ).sort((m1, m2) => {
            let testMovie1Key = (sortColumn.sortWith !== 'genre') ? m1[sortColumn.sortWith] : m1[sortColumn.sortWith].name;
            let testMovie2Key = (sortColumn.sortWith !== 'genre') ? m2[sortColumn.sortWith] : m2[sortColumn.sortWith].name;
            if (testMovie1Key < testMovie2Key) return -1;
            if (testMovie1Key > testMovie2Key) return 1;
            return 0;
        });

        const paginatedMovies = paginate(genreMovies, currentPage, pageSize);
        const size = (currentGenre === 'All Genres') ? movies.length : genreMovies.length;

        return {
            size: size,
            paginatedMovies: paginatedMovies
        }
    };

    render() {
        const { pageSize, currentPage, currentGenre, searchBarValue } = this.state;
        const { size, paginatedMovies } = this.getPagedData();
        return (
            <div className="row">
                <div className="col-9">
                    <p>showing {paginatedMovies.length} movies in the dataBase.</p>
                    <Link className="btn btn-primary" to="/movies/new" >New Movie</Link>
                    <SearchBar
                        onChange={this.handelSearchBarChange}
                        searchQuery={searchBarValue}
                    />
                    <MoviesTable
                        handelDecrement={(movie) => this.handelDecrement(movie)}
                        handelIncrement={(movie) => this.handelIncrement(movie)}
                        handleDelete={(movie) => this.handleDelete(movie)}
                        paginatedMovies={paginatedMovies}
                        handelSort={key => this.handelSort(key)}
                    />
                    <Pagination
                        itemsCount={size}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={(pageNumber) => this.PageChange(pageNumber)}
                    />
                </div>
                <div className="col-3">
                    <ListGroup
                        handleGenre={this.handleGenre}
                        currentGenre={currentGenre}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;