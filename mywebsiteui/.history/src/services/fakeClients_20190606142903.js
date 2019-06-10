
const clients = [
    {
        id:2,
        name:"GOOGLE",
        created_at:"2019-01-31 09:48:52",
        updated_at:"2019-04-26 13:38:43",
        contract_id:7
    },
    {
        id:3,
        name:"Peak Ace AG",
        created_at:"2019-03-05 15:34:42",
        updated_at:"2019-03-08 15:34:42",
        contract_id:24
    },
    {
        id:4,
        name:"CASUMO",
        created_at:"2019-01-15 09:48:52",
        updated_at:"2019-04-26 13:38:43",
        contract_id:8
    },
    {
        id:5,
        name:"A&O HOSTELS",
        created_at:"2019-03-17 15:34:42",
        updated_at:"2019-04-29 15:34:42",
        contract_id:25
    }
];

export function getClients(){
    return clients;
}

export function getClient( clientId ) {
    return clients.find( client => client.id === clientId);
}

export function deleteClient ( clientId ){
    const client = clients.find( client => client.id === clientId);
    if (typeof client !== 'undefined') {
        clients.splice(clients.indexOf(client), 1);
    } 
    return client;
}