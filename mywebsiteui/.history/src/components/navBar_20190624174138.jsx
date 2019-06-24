import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Vidly</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link active" to="/movies">Movies</NavLink>
                    <NavLink className="nav-item nav-link" to="/clients">Customers</NavLink>
                    <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                    {!user &&
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
                        </React.Fragment>
                    }
                    {user &&
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/profile">{}</NavLink>
                            <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
                        </React.Fragment>
                    }
                </div>
            </div>
        </nav>
    );
}

export default NavBar;