import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" href="#">Navbar</Link>
                
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></Link>
                        <Link class="nav-item nav-link" href="#">Features</Link>
                        <Link class="nav-item nav-link" href="#">Pricing</Link>
                        <Link class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;