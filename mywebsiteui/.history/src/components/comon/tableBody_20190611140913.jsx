import React, { Component } from 'react';


class TableBody extends Component {
    render() {
        const { paginatedMovies, renderMovie} = this.props;
        return ( <tbody>
            {paginatedMovies.map( (movie) => (
                renderMovie(movie)
            ))}
        </tbody> );
    }
}
 
export default TableBody;