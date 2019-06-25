import React from 'react';

const SearchBar = ({ onChange, searchQuery }) => {
    return (
        <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            style={{ margin: '15px'}}
            onChange={(e)=>onChange( e.currentTarget.value )}
            value={searchQuery}
        />
    );
}
 
export default SearchBar;