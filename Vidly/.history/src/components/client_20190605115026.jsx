import React, { Component } from 'react';

class Client extends Component {
    state = {  
        name: '',
        address:{

        },
        count : 0
    }

    formatCount(){
        const { count } = this.state;
        return (count === 0) ? 'Zero' : count ;
    }

    render() { 
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Inremment</button>
            </React.Fragment> 
        );
    }
}
 
export default Client;