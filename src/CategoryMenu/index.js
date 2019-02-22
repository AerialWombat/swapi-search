import React from 'react';
import './index.css';

const CategoryMenu = ({ onCategoryChange }) => {
    return (
        <div className='menu'>
            <h3 className='menu__header'>Choose a category to search:</h3>
            <div className='menu__list'>
                <button className='menu__button' id='planets' onClick={onCategoryChange}>Planets</button>
                <button className='menu__button' id='starships' onClick={onCategoryChange}>Starships</button>
                <button className='menu__button' id='vehicles' onClick={onCategoryChange}>Vehicles</button>
                <button className='menu__button' id='people' onClick={onCategoryChange}>People</button>
                <button className='menu__button' id='films' onClick={onCategoryChange}>Films</button>
                <button className='menu__button' id='species' onClick={onCategoryChange}>Species</button>
            </div>
        </div>
    )
}

export default CategoryMenu