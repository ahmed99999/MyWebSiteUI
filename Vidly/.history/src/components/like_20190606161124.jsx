import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() {
        const { liked, onClick } = this.props ;
        return (
            <i className="fa fa-heart-o" aria-hidden="true" onClick = {onClick}></i>
        );
    }
}
 
export default Like;