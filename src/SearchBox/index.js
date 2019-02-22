import React from 'react';
import './index.css';

const SearchBox = ({ onSearchChange }) => {
    return (
        <div className='search'>
            <input 
                className='search__input'
                type='search'
                placeholder='Search by name or title...'
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox