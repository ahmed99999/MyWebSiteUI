import React, { Component } from 'react';
import auth from '../services/authService';

class Logout extends Component {
    componentDidMount() {
        auth.logout();
        window.location = '/';
    }
    render() {
        // console.log( auth );
        return null;
    }
}
 
export default Logout;