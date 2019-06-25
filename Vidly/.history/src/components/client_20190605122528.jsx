import React, { Component } from 'react';

class Client extends Component {
    state = {  
        name: '',
        address:{ },
        count : 1,
        tags : ['tag1', 'tag2', 'tag3']
    }

    constructor(){
        super();
    }

    formatCount = () => {
        const { count } = this.state;
        return (count === 0) ? 'Zero' : count ;
    }

    renderTags = () => {
        if (this.state.tags.length === 0 ) return <h5>add some tags</h5>;
        return <ul>{this.state.tags.map( ( tag, index )=> <li key={index}>{tag}</li> )}</ul>;
    }

    getBadgeClasses = () => {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count) ? 'primary' : 'warning';
        return classes;
    }

    render() {        
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Inremment</button>
                { this.renderTags() }
            </React.Fragment> 
        );
    }

}
 
export default Client;