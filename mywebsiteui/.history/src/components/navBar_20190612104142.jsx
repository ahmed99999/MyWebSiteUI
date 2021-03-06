import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Vidly</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/movies">Movies</Link>
                    <Link className="nav-item nav-link" to="/clients">Customers</Link>
                    <Link className="nav-item nav-link" to="rentals">Rentals</Link>
                </div>
            </div>
        </nav>
    ); 
}
 
export default NavBar;