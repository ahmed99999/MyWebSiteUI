import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SaveMovie extends Component {
    state = {  }
    render() {
        const {match} = this.props;
        return (
            <React.Fragment>
                <h1>Movie From {match.params.id}</h1>
                <button className="btn btn-primary"><Link to="/movies">Save</Link></button>
            </React.Fragment>
        );
    }
}
 
export default SaveMovie;