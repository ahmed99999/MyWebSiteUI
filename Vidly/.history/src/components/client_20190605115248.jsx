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
        return (count === 0) ? <h1>Zero</h1>  : count ;
    }

    render() { 
        return (
            <React.Fragment>
                <span className='' >{this.formatCount()}</span>
                <button>Inremment</button>
            </React.Fragment> 
        );
    }
}
 
export default Client;