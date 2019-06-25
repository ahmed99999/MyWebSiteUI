import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';

class Genre extends Component {
    state = {
        genres : getGenres()
    }

    render() {
        const { handleGernre } = this.props;
        const { genres } = this.state;
        genres.unshift({_id: 2547188, name: 'All Genres'});
        const classNameData = "list-group-item"; // active

        return (
            <ul className="list-group">
                {genres.map( genre =>(
                    <li className={classNameData}>
                        <a onClick={handleGernre}>{genre.name}</a>
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Genre;