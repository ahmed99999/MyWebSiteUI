import React, { Component } from 'react';

class Client extends Component {
    state = {  
        name: '',
        address:{ },
        count : 0
    }

    formatCount(){
        const { count } = this.state;
        return (count === 0) ? 'Zero' : count ;
    }

    render() { 
        return (
            <React.Fragment>
                <span className='badge badge-primary m-2' >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Inremment</button>
            </React.Fragment> 
        );
    }
}
 
export default Client;