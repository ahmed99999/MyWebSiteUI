import React, { Component } from 'react';

class SearchBar extends Component {
    render() { 
        return (
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ margin: '15px'}}
            />
        );
    }
}
 
export default SearchBar;