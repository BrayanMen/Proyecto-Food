import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { recipePost, getDiets } from '../../Redux/Actions/Action';
import './CreateRecipe.css'

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Ingresar nombre de la receta";
  }
  if (!input.summary) {
    errors.summary = "Escribe un resumen de la receta";
  }
  if (!input.health_score || input.health_score < 0 || input.health_score > 100) {
    errors.health_score = "Ingresa un puntaje de 0 a 100";
  }
  if (!input.step_by_step.length) {
    errors.step_by_step =
      "Escribe una serie de pasos sobre cómo cocinar la receta";
  }
  if (!input.image) {
    errors.image = "Ingresar alguna imagen de la receta";
  }
  return errors;
}

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets)

  //useEffect

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  //States

  const [form, setForm] = useState({
    name: "",
    summary: "",
    image: "",
    health_score: 0,
    step_by_step: [],
    diets: [],
  })

  const [errors, setErrors] = useState({});

  //handlers

  function handleInputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleDietsSelect(e) {
    setForm({
      ...form,
      diets: [...form.diets, e.target.value]
    })
  }

  function handleDietDelete(diets) {  
    setForm({
      diets: form.diets.filter((e) => e !== diets),
    });
   }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0)
      alert("Por favor rellenar todos los campos");
    else {
      dispatch(recipePost(form));
      alert('¡Receta Creada!')
      history.push('/home')
    }
  }

  function handleSteps(e) {
    setForm({
      ...form,
      step_by_step: [e.target.value],
    });
  }

  return (
    <div className='divCreate'>
      <h1 className='h1create'>Crear Receta</h1>
    </div>
  )
}

