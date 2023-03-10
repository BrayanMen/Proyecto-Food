import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Componets/Landing/Landing.jsx'
import Home from './Componets/Home/Home';
import CreateRecipe from './Componets/CreateRecipe/CreateRecipe'
import DetailRecipe from './Componets/DetailRecipe/DetailRecipe'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/home' component={Home} />
          <Route path='/recipe' component={CreateRecipe} />
          <Route path='/recipes/:id' component={DetailRecipe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
