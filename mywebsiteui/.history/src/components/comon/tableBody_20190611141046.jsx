import React, { Component } from 'react';


class TableBody extends Component {
    render() {
        const { paginatedMovies, renderElement} = this.props;
        return ( <tbody>
            {paginatedMovies.map( (movie) => (
                renderElement(movie)
            ))}
        </tbody> );
    }
}
 
export default TableBody;