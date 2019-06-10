import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';

class Genre extends Component {
    state = {
        genres : getGenres()
    }

    render() {
        const { genres } = this.state;
        const classNameData = "list-group-item"; // active
        return (
            <ul className="list-group">
                {genres.map( genre =>(
                    <li 
                        className={classNameData}
                        onClick={}
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Genre;