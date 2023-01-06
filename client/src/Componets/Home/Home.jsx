import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, getRecipes, filterDiets, orderByName, orderByScore, } from '../../Redux/Actions/Action';
import { Link } from 'react-router-dom'
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import './Home.css'

export default function Home() {
    const dispatch = useDispatch();

    const allRecipes = useSelector((state) => state.recipes);
    const allDiets = useSelector((state) => state.diets);

    const [currentePage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);
    const [change, setChange] = useState(true)

    const lastRecipes = currentePage * recipesPerPage; //Trae 9 recetas
    const firsRecipe = lastRecipes - recipesPerPage;

    const currentRecipes = allRecipes.slice(firsRecipe, lastRecipes);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    //UseEffect

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);


    //Handlers

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }

    function handleFilterDiets(e) {
        dispatch(filterDiets(e.target.value));
    }

    function handleOrderByScore(e) {
        dispatch(orderByScore(e.target.value));
        change ? setChange(false) : setChange(true)
    }

    function handleOrderByNames(e) {
        dispatch(orderByName(e.target.value));
        change ? setChange(false) : setChange(true)
    }

    return (
        <div>
            <h1>Food API </h1>
            <Link to='/recipe'>Crear Receta</Link>
            <button onClick={e => [handleClick(e)]}>Refresh</button>
            <div>
                <select onChange={(e) => handleOrderByNames(e)}>
                    <option value='Order Alphabetic' disabled>Orden Alfabetico</option>
                    <option value='Asc'>A - Z</option>
                    <option value='Desc'>Z - A</option>
                </select>
                <select onChange={(e) => handleOrderByScore(e)}>
                    <option value='Score Order' disabled>Orden por Puntaje</option>
                    <option value='Max'>Max</option>
                    <option value='Min'>Min</option>
                </select>
                <select onChange={e => handleFilterDiets(e)}>
                    <option value='diets' >Dietas</option>
                    {allDiets?.map((diet) => {
                        return (<option value={diet.name} key={diet.id}>{diet.name}</option>)
                    })
                    }
                </select>
                <div className='cardDiv'>
                    {currentRecipes && currentRecipes.map((r, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/recipes/${r.id}`}>
                                    <Card
                                        id={r.id}
                                        name={r.name}
                                        image={r.image}
                                        diets={r.diets}
                                        score={r.health_score}
                                        key={r.id}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
                    <Pagination recipesPerPage={recipesPerPage}
                        allRecipes={allRecipes.length}
                        pagination={pagination}
                    />
            </div>
        </div>
    )
};
