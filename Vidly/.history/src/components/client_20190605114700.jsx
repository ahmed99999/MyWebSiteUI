import React, { Component } from 'react';

class Client extends Component {
    state = {  
        name: '',
        address:{

        },
        count : 0
    }
    render() { 
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <button>Inremment</button>
            </React.Fragment> 
        );
    }
}
 
export default Client;