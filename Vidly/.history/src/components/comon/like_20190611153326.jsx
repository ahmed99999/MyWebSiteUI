import React from 'react';

const Like = ({ liked, onClick }) => {

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