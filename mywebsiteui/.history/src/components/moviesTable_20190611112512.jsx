import React from 'react';
import Movie from './movie';

const MoviesTable = props => {

    const { handelDecrement, handelIncrement, handleDelete } = props;
    
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
                        onDelete = { ()=>this.handleDelete(movie) }
                        onIncrement = { ()=>this.handelIncrement(movie) }
                        onDecrement = { ()=>this.handelDecrement(movie) }
                    />
                ))}
            </tbody>
        </table>
     );
}
 
export default MoviesTable;