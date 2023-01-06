import React from 'react'
import './Pagination.css'

export default function Pagination({recipesPerPage, allRecipes, pagination}) {

    const pageNumber = []

    for (let i = 1; i <=Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumber.push(i)        
    }
  return (
    <nav >
        <ul className='pagination-ul'>
            {pageNumber?.map(n => { return(
                <li className='pagination'  key={n}>
                <button className='pagination-button' onClick={()=> pagination(n)}>{n}</button>
                </li>
                )
            })}
        </ul>
    </nav>
  )
}
