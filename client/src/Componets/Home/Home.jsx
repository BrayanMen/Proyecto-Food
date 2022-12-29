import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, getRecipes } from '../../Redux/Actions/Action';
import { Link } from 'react-router-dom'
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

export default function Home() {
    const dispatch = useDispatch();

    const allRecipes = useSelector((state) => state.recipes);
    //git const allDiets = useSelector((state) => state.diets);

    const [currentePage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);

    const lastRecipes = currentePage * recipesPerPage; //Trae 9 recetas
    const firsRecipe = lastRecipes - recipesPerPage;

    const currentRecipes = allRecipes.slice(firsRecipe, lastRecipes);

    const pagination = (pageNumber) =>{
        setCurrentPage(pageNumber)
    };


    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);




    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }

    return (
        <div>
            <h1>Food API </h1>
            <Link to='/recipe'>Crear Receta</Link>
            <button onClick={e => [handleClick(e)]}>Refresh</button>
            <div>
                <select>
                    <option value='Order Alphabetical' disabled>Orden Alfabetico</option>
                    <option value='Asc'>A - Z</option>
                    <option value='Desc'>Z - A</option>
                </select>
                <select>
                    <option value='Score Order' disabled>Orden por Puntaje</option>
                    <option value='Max'>Max</option>
                    <option value='Min'>Min</option>
                </select>
                <select>
                    <option value='Diets' disabled>Dietas</option>
                    <option value='diets'>DIETS</option>
                </select>
                <Pagination recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                pagination = {pagination}
                />            
                <div>
                    {currentRecipes&&currentRecipes.map((r, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/recipes/${r.id}`}>
                                    <Card
                                        key={r.id}
                                        id={r.id}
                                        name={r.name}
                                        image={r.image}
                                        diets={r.diets.map(re => <>{re.name}</>)}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
};
