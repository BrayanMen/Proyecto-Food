import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, getRecipes, filterDiets, orderByName, orderByScore, } from '../../Redux/Actions/Action';
import { Link } from 'react-router-dom'
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import './Home.css'
import Navbar from '../Navbar/Navbar';

export default function Home() {
    const dispatch = useDispatch();

    const allRecipes = useSelector((state) => state.recipes);
    const allDiets = useSelector((state) => state.diets);

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);
    const [change, setChange] = useState(true)

    const lastRecipes = currentPage * recipesPerPage; //Trae 9 recetas
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

    /*function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }*/

    function handleFilterDiets(e) {
        dispatch(filterDiets(e.target.value));
    }

    function handleOrderByScore(e) {
        dispatch(orderByScore(e.target.value));
        setCurrentPage(1);
        change ? setChange(false) : setChange(true);
        e.preventDefault();
    }

    function handleOrderByNames(e) {
        dispatch(orderByName(e.target.value));
        change ? setChange(false) : setChange(true);
        setCurrentPage(1);
        e.preventDefault();
    }

    return (
        <div>
            <Navbar />
            <div>
                <select className='selectHome' defaultValue="default" onChange={(e) => { handleOrderByNames(e) }}>
                    <option value='Alpha'>Orden Alfabetico</option>
                    <option key='Asc' value='Asc'>A - Z</option>
                    <option key='Desc' value='Desc'>Z - A</option>
                </select>
                <select className='selectHome' defaultValue="default" onChange={(e) => { handleOrderByScore(e) }}>
                    <option value='Puntaje' >Orden por Puntaje</option>
                    <option key='Max' value="Max">Max</option>
                    <option key='Min'value='Min'>Min</option>
                </select>
                <select className='selectHome' defaultValue="default" onChange={e => handleFilterDiets(e)}>
                    <option value='Dietas'>Dietas</option>
                    {allDiets?.map((diet) => {
                        return (<option value={diet.name} key={diet.id}>{diet.name}</option>)
                    })
                    }
                </select>
                <Pagination recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes?.length}
                    pagination={pagination}
                    currentPage={currentPage}
                />
                <div className='cardDiv'>
                    {currentRecipes && currentRecipes.map((r, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/recipes/${r.id}`}>
                                    <Card
                                        id={r.id}
                                        name={r.name}
                                        image={r.image}
                                        diet={r.diets}
                                        health_score={r.health_score}
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
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
};
