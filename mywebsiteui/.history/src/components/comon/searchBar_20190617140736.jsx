import React from 'react';

const SearchBar = ({ onChange, searchQuery }) => {
    return (
        <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            style={{ margin: '15px'}}
            onChange={()=>onChange( searchQuery )}
            value={searchQuery}
        />
    );
}
 
export default SearchBar;