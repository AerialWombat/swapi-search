import React from 'react';
import './index.css'

const Card = ({ key, category, filteredData }) => {
    switch (category) {
        case 'planets':
            return (
                <div className='card'>
                    <h1>Name: {filteredData.name}</h1>
                    <p>Climate: {filteredData.climate}</p>
                    <p>Population Size: {filteredData.population}</p>
                </div>
            )
        case 'starships':
            return (
                <div className='card'>
                    <h1>Name: {filteredData.name}</h1>
                    <p>Model: {filteredData.model}</p>
                    <p>Crew Size: {filteredData.crew}</p>
                </div>
            )
        case 'vehicles':
            return (
                <div className='card'>
                    <h1>Name: {filteredData.name}</h1>
                    <p>Model: {filteredData.model}</p>
                    <p>Passengers: {filteredData.passengers}</p>
                </div>
            )
        case 'people':
            return (
                <div className='card'>
                    <h1>Name: {filteredData.name}</h1>
                    <p>Birth Year: {filteredData.birth_year}</p>
                    <p>Height: {filteredData.height}</p>
                    <p>Weight: {filteredData.mass}kg</p>
                </div>
            )
        case 'films':
            return (
                <div className='card'>
                    <h1>Title: {filteredData.title}</h1>
                    <p>Episode #: {filteredData.episode_id}</p>
                    <p>Director: {filteredData.director}</p>
                </div>
            )
        case 'species':
            return (
                <div className='card'>
                    <h1>Name: {filteredData.name}</h1>
                    <p>Average Lifespan: {filteredData.average_lifespan}</p>
                    <p>Language: {filteredData.language}</p>
                </div>
            )
        default:
                break;
    }
}

export default Card;