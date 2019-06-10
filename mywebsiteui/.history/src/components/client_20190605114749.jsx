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
                <span>{this.state.count}</span>
                <button>Inremment</button>
            </React.Fragment> 
        );
    }
}
 
export default Client;