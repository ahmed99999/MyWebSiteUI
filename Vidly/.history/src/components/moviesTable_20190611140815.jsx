import React, { Component } from 'react';
import Movie from './movie';
import TableBody from './comon/tableBody';
import TableHeader from './comon/tableHeader';

class MoviesTable extends Component {

    columns = [
        {key : 'title', lable : 'Title'},
        {key : 'genre', lable : 'Genre'},
        {key : 'numberInStock', lable : 'Stock'},
        {key : 'dailyRentalRate', lable : 'Rate'},
        {key : 'like'},
        {key : 'delete'},
        {key : 'increment'},
        {key : 'decrement'}
    ];

    renderMovie = movie => {
        const { handelDecrement, handelIncrement, handleDelete } = this.props;
        return <Movie 
                    key = { movie._id } 
                    movie = { movie } 
                    onDelete = { ()=>handleDelete(movie) }
                    onIncrement = { ()=>handelIncrement(movie) }
                    onDecrement = { ()=>handelDecrement(movie) }
                />
    }

    render() { 
        const { handelDecrement, handelIncrement, handleDelete, paginatedMovies, handelSort } = this.props;

        return ( 
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    handelSort={handelSort}
                />
                <TableBody
                    paginatedMovies={paginatedMovies}
                    // handleDelete={handleDelete}
                    // handelDecrement={handelDecrement}
                    // handelIncrement={handelIncrement}
                    renderMovie={this.renderMovie} 
                />
            </table>
         );
    }
}
 
export default MoviesTable;