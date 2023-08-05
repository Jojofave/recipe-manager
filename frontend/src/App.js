import React from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import './styles.css';

function App() {
  return (
    <div className="app">
      <h1>My Recipe Manager</h1>
      <RecipeList />
      <RecipeDetails />
      <AddRecipeForm />
    </div>
  );
}

export default App;

