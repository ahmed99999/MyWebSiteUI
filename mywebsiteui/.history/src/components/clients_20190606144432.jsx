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
            <table className="table">
                <thead>
                    <tr>
                        <th>Clients</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map( client => (
                        <Client client = {client} />
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Clients;