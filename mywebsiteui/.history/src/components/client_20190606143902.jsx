import React, { Component } from 'react';
import { getClient } from '../services/fakeClients';

class Client extends Component {
    state = {  
        client : getClient( this.props.client.id )
    }
  
    render() {        
        return (
            <React.Fragment>
                <span className="btn btn-success">{this.state.client.name}</span>
                <button className="btn btn-secondary btn-sm">getData</button>
            </React.Fragment> 
        );
    }

}
 
export default Client;