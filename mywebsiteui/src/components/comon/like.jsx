import React from 'react';

const Like = props => {
    const { liked, onClick } = props ;
    let clasdNameData = "fa fa-heart";
    clasdNameData += (liked) ? "" : "-o";

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