import React, { Component } from 'react';
// import Movie from '../movie';

class TableBody extends Component {

    render() {
        const { paginatedMovies, handleDelete, handelIncrement, handelDecrement, row } = this.props;
        return ( 
            <tbody>
                {paginatedMovies.map( (movie) => (
                    <row 
                        key = { movie._id } 
                        movie = { movie } 
                        onDelete = { ()=>handleDelete(movie) }
                        onIncrement = { ()=>handelIncrement(movie) }
                        onDecrement = { ()=>handelDecrement(movie) }
                    />
                ))}
            </tbody>
         );
    }
}
 
export default TableBody;