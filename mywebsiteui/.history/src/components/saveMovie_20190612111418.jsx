import React, { Component } from 'react';

class SaveMovie extends Component {
    state = {  }
    render() {
        const match = this.props;
        return ( 
            <h1>Movie From {match.params.id}</h1>
         );
    }
}
 
export default SaveMovie;