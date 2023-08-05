import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-recipe-form">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
        />
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients"
        ></textarea>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
        ></textarea>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
