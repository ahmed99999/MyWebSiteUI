import React, { Component } from 'react';
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
                    handelDecrement={handelDecrement}
                    handelIncrement={handelIncrement}
                    handleDelete={handleDelete}
                />
            </table>
         );
    }
}
 
export default MoviesTable;