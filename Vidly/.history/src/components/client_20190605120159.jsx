import React, { Component } from 'react';

class Client extends Component {
    state = {  
        name: '',
        address:{ },
        count : 1
    }

    formatCount(){
        const { count } = this.state;
        return (count === 0) ? 'Zero' : count ;
    }

    render() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count) ? 'primary' : 'warning';
        return (
            <React.Fragment>
                <span className={classes}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Inremment</button>
            </React.Fragment> 
        );
    }
}
 
export default Client;