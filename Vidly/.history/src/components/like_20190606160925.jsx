import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() {
        const { liked } = this.props ;
        return (
            <i className="fa fa-heart-o" aria-hidden="true"></i>
        );
    }
}
 
export default Like;