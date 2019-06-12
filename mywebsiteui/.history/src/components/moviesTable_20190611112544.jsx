import React from 'react';
import Movie from './movie';

const MoviesTable = props => {

    const { handelDecrement, handelIncrement, handleDelete, paginatedMovies } = props;

    return ( 
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
                        onDelete = { ()=>handleDelete(movie) }
                        onIncrement = { ()=>handelIncrement(movie) }
                        onDecrement = { ()=>handelDecrement(movie) }
                    />
                ))}
            </tbody>
        </table>
     );
}
 
export default MoviesTable;