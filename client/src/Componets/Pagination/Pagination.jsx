import React from 'react'

export default function Pagination({recipesPerPage, allRecipes, pagination}) {

    const pageNumber = []

    for (let i = 0; i <=Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumber.push(i)        
    }
  return (
    <nav>
        <ul>
            {pageNumber?.map(n => { return(
                <li className='number' key={n}>
                <button onClick={()=> pagination(n)}>{n}</button>
                </li>
                )
            })}
        </ul>
    </nav>
  )
}
