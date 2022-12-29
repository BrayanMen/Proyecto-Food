import React from 'react'
//import { Link } from 'react-router-dom'

export default function Card({image, name, diets, id}) {
    return (
        <div>
                <h3>{name}</h3>
                <img src={image} alt="Not Found" width="300px" height="300px"/>
                <label>Dietas:</label>
                <ul>
                    {diets?.map( d => {
                        return (
                        <li key={d.name}>{JSON.stringify(d.name)}</li>
                    )})}
                </ul>
        </div>
    )
}
