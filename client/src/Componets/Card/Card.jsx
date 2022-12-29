import React from 'react'
//import { Link } from 'react-router-dom'

export default function Card(image, name, diets, id) {
    return (
        <div>
                <h3>{name}</h3>
                <img src={image} alt="Not Found" />
                <label>Dietas:</label>
                <ul>
                    {diets?.map( d => (
                        <li key={d}>{d.name}</li>
                    ))}
                </ul>
        </div>
    )
}
