import React, { Component } from 'react';
import Movie from './movie';
import TableHeader from './comon/tableHeader';

class MoviesTable extends Component {

    columns = [
        {key : 'title', lable : 'Title'},
        {key : 'genre', lable : 'Genre'},
        {key : 'numberInStock', lable : 'Stock'},
        {key : 'dailyRentalRate', lable : 'Rate'},
        { },
        { },
        { },
        { }
    ];

    render() { 
        const { handelDecrement, handelIncrement, handleDelete, paginatedMovies, handelSort } = this.props;

        return ( 
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    handelSort={handelSort}
                />
                <tbody>
                    {paginatedMovies.map( (movie) => (
                        <Movie 
                            key = { movie._id } 
                            movie = { movie } 
                            onDelete = { ()=>handleDelete(movie) }
                            onIncrement = { ()=>handelIncrement(movie) }
                            onDecrement = { ()=>handelDecrement(movie) }
                        />
                    ))}
                </tbody>
            </table>
         );
    }
}
 
export default MoviesTable;