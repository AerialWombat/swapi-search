import React from 'react';
import Card from '../Card';
import './index.css';

const CardList = ({ category, filteredData }) => {
    return (
        <div className='cardlist'>
            {
                filteredData.map((item, i) => {
                    return (
                        <Card reactKey={i} category={category} filteredData={filteredData[i]} />
                    )
                })
            }
        </div>
    )
}

export default CardList;