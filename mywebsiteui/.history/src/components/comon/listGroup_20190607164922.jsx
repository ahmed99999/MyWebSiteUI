import React, { Component } from 'react';
import { getGenres } from '../../services/fakeGenreService';

class ListGroup extends Component {
    state = {
        genres : getGenres()
    }

    render() {
        const { handleGenre, currentGenre, textProperty, valueProperty } = this.props;
        const { genres } = this.state;
        const allGenre = {_id: 2547188, name: 'All Genres'};
        const found = genres.some(g => g.name === allGenre.name);
        if (!found) genres.unshift(allGenre);
        const classNameData = "list-group-item"; // active

        return (
            <ul className="list-group">
                {genres.map( genre =>(
                    <li key = {genre[valueProperty]}
                        className={ (currentGenre === genre.name) ? classNameData+' active' : classNameData }
                        onClick={() => handleGenre(genre[textProperty], currentGenre)}
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        );
    }
}

ListGroup.defaultProps = {
    textProperty : 'name',
    valueProperty: '_id'
};

export default ListGroup;