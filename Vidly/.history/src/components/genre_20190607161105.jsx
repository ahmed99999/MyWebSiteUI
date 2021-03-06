import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';

class Genre extends Component {
    state = {
        genres : getGenres()
    }

    render() {
        const { handleGenre, currentGenre } = this.props;
        const { genres } = this.state;
        const allGenre = {_id: 2547188, name: 'All Genres'};
        if (genres.indexOf(allGenre) < 0) genres.unshift(allGenre);
        const classNameData = "list-group-item"; // active

        return (
            <ul className="list-group">
                {genres.map( genre =>(
                    <li key = {genre._id}
                        className={ (currentGenre == genre.name) ? classNameData + ' active' : classNameData }
                        onClick={() => handleGenre(genre.name)}
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Genre;