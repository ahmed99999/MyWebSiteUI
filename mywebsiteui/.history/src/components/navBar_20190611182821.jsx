import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Vidly</Link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-item nav-link active" to="/movies">Movies</Link>
                    <Link class="nav-item nav-link" to="/clients">Customers</Link>
                    <Link class="nav-item nav-link" to="rentals">Rentals</Link>
                </div>
            </div>
        </nav>
    ); 
}
 
export default NavBar;