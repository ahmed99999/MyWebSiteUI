import React, { Component } from 'react';
import { getClient } from '../services/fakeClients';

class Client extends Component {
    state = {  
        client : getClient( this.props.client.id )
    }
  
    render() {
        const { client } = this.state;
        return (
            <tr id = {client.id}>
                <td><button className="btn btn-success btn-sm m-2">{this.state.client.name}</button></td>
                <td><button  className="btn btn-secondary btn-sm m-2">getData</button></td>
            </tr>             
        );
    }

}
 
export default Client;