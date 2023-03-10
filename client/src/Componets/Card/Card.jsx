import React from 'react'
import './Card.css'
//import { Link } from 'react-router-dom'

export default function Card({ image, name, diet, health_score }) {
    return (
        <div className='div_card'>
            <h3 className='title_card'>{name}</h3>
            <h4> Score: {health_score}</h4>
            <img src={image} alt="Not Found" width="200px" height="200px" />
            <ul className='card_ul'>
                <p>Dietas:</p>
                {diet.map((diet, id) => {
                    return (
                        <li className='card_li' key={id}>{diet.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
