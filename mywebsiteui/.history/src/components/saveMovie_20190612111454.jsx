import React, { Component } from 'react';

class SaveMovie extends Component {
    state = {  }
    render() {
        const match = this.props;
        return ( 
            <h1>Movie From {match.params.id}</h1>
            <button className="btn btn-primary">Save</button>
        );
    }
}
 
export default SaveMovie;