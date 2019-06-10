import React, { Component } from 'react';
import { getClients } from '../services/fakeClients';
import Client from './client';

class Clients extends Component {
    state = { 
        clients : getClients()
    }

    render() {
        const { clients } = this.state;
        return ( 
            clients.map( client => (
                <Client client = {client} />
            ))
        );
    }
}
 
export default Clients;