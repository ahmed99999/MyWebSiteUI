import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SaveMovie extends Component {
    state = {  }
    render() {
        const {match} = this.props;
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1>Movie From {match.params.id}</h1>
                    <Link className="btn btn-primary" to="/movies">Save</Link>
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}
 
export default SaveMovie;