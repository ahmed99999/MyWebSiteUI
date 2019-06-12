import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Vidly</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link active" to="/movies">Clients</NavLink>
                    <NavLink className="nav-item nav-link" to="/clients">Customers</NavLink>
                    <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                    <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    ); 
}
 
export default NavBar;