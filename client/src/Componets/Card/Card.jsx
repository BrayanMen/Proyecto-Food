import React from 'react'
import './Card.css'
//import { Link } from 'react-router-dom'

export default function Card({ image, name, diets, health_score }) {
    return (
        <div className='div_card'>
            <h3>{name}</h3>
            <p>{health_score}</p>
            <img src={image} alt="Not Found" width="200px" height="200px" />
            <ul>
                <p>Dietas:</p>
                {diets.map((d, id) => {
                    return (
                        <li className='card_li' key={id}>{d}</li>
                    )
                })}
            </ul>
        </div>
    )
}
