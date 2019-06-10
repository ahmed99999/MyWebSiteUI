import React, { Component } from 'react';

class Client extends Component {
    state = {  
        name: '',
        address:{ },
        count : 1,
        tags : ['tag1', 'tag2', 'tag3']
    }

    // formatCount(){
    //     const { count } = this.state;
    //     return (count === 0) ? 'Zero' : count ;
    // }

    render() {        
        return (
            <React.Fragment>
                {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Inremment</button> */}
                <ul>{this.state.tags.map( ( tag, index )=> <li key={index}>{tag}</li> )}</ul>
            </React.Fragment> 
        );
    }

    // getBadgeClasses() {
    //     let classes = 'badge m-2 badge-';
    //     classes += (this.state.count) ? 'primary' : 'warning';
    //     return classes;
    // }
}
 
export default Client;