import React from 'react';
import Movie from './movie';

const MoviesTable = props => {

    const { handelDecrement, handelIncrement, handleDelete, paginatedMovies, handelSort } = props;

    return ( 
        <table className="table">
            <thead>
                <tr key = '-1'>
                    <th onClick={()=>handelSort('title')}>Title</th>
                    <th onClick={()=>handelSort('genre')}>Genre</th>
                    <th onClick={()=>handelSort('numberInStock')}>Stock</th>
                    <th onClick={()=>handelSort('dailyRentalRate')}>Rate</th>
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