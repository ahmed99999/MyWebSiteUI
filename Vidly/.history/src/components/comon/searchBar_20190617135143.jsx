import React from 'react';

const SearchBar = ({ onChange }) => {
    return (
        <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            style={{ margin: '15px'}}
            onChange={onChange}
        />
    );
}
 
export default SearchBar;