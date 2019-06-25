import React, { Component } from 'react';
import { getClient } from '../services/fakeClients';

class Client extends Component {
    state = {  
        client : getClient( this.props.client.id )
    }
  
    render() {        
        return (
            <React.Fragment>
                <tr>
                    <td className="btn btn-success btn-sm m-2">{this.state.client.name}</td>
                    <td className="btn btn-secondary btn-sm m-2">getData</td>
                </tr>
            </React.Fragment> 
        );
    }

}
 
export default Client;