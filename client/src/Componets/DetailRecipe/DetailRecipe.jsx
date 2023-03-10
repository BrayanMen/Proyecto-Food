import React, { useEffect } from 'react'
import { recipeDetails } from '../../Redux/Actions/Action'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './DetailRecipe.css'

export default function DetailRecipe() {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(recipeDetails(id))
  }, [dispatch, id])

  const detail = useSelector((state) => state.details)
  console.log(detail)

  return (
    <div>
      <Navbar />
      <div className='divDetail'>
        {
          detail.length > 0 ? ((<p>Cocinando... </p>)
          ) : (
            <div>
              <h2 className='titleDetail'>{detail.name}</h2>
              <div>
                <img src={detail.image}
                  alt="Not Found"
                  width="300px"
                  height="300px"
                />
              </div>
              <div>
                <h3 className='titleDetail'>Health Score: {detail.health_score}</h3>
                <h4 className='titleDetail'>Resumen:</h4>
                <p className='pDetail' dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
                <h3 className='titleDetail'>Paso a paso:</h3>
                <p className='pDetail' dangerouslySetInnerHTML={{ __html: detail.step_by_step }}></p>
                <ul className='ulDetail'>
                  <p className='titleDetail'>Dietas:</p>
                  {detail.diets?.map((d, id) => {
                    return (
                      <li className='liDetail' key={id}>{d}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        }
      </div>
      <Link to='/home'>
        <button>Inicio</button>
      </Link>
    </div>
  )
}
