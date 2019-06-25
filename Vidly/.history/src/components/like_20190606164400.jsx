import React, { Component } from 'react';

const Like = () => {
    
    const { liked, onClick } = this.props ;
    let clasdNameData = "fa fa-heart" + (liked) ? "" : "-o" ;
        
    return (
        <i 
            className={clasdNameData} 
            aria-hidden="true" 
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        ></i>
    );
}
 
export default Like;