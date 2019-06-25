import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() {
        const { liked, onClick } = this.props ;
        let clasdNameData = "fa fa-heart" ;
        clasdNameData += (liked) ? "" : "-o"
        return (
            <i className={clasdNameData} aria-hidden="true" onClick = {onClick}></i>
        );
    }
}
 
export default Like;