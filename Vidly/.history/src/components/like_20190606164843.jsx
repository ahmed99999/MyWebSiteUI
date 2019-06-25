import React, { Component } from 'react';

class Like extends Component {
    render() {
        const { liked, onClick } = this.props ;
        let clasdNameData = "fa fa-heart" ;
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
}
 
export default Like;

// import React, { Component } from 'react';

// const Like = props => {
//     const { liked, onClick } = props ;
//     let clasdNameData = "fa fa-heart" + (liked) ? "" : "-o" ;

//     return (
//         <i 
//             className={clasdNameData} 
//             aria-hidden="true" 
//             onClick={onClick}
//             style={{ cursor: 'pointer' }}
//         ></i>
//     );
// }
 
// export default Like;