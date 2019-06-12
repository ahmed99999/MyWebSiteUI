import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SaveMovie extends Component {
    state = {  }
    render() {
        const {match} = this.props;
        return (
            <React.Fragment>
                <h1>Movie From {match.params.id}</h1>
                <Link className="btn btn-primary" to="/movies">Save</Link>
            </React.Fragment>
        );
    }
}
 
export default SaveMovie;