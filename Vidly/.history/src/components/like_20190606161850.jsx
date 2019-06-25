import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() {
        const { liked, onClick } = this.props ;
        const clasdNameData = (liked) ? "fa fa-heart" : "fa fa-heart-o"
        return (
            <i className={clasdNameData} aria-hidden="true" onClick = {onClick}></i>
        );
    }
}
 
export default Like;