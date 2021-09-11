import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Recipe } from '../Models/recipe';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import RecipeDashboard from '../../features/recipes/RecipeDashboard';
import nextId from "react-id-generator";


function App() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Recipe[]>('https://localhost:5001/api/recipes').then(response => {
      setRecipes(response.data);
    })
  }, [])


  function handleSelectRecipe(id: number) {
    setSelectedRecipe(recipes.find(x => x.id === id));
    axios.get<Recipe>(`https://localhost:5001/api/recipes/${id}`)
  }

  function handleCancelSelectedRecipe() {
    setSelectedRecipe(undefined);
  }

  function handleFormOpen(id?: number) {
    id ? handleSelectRecipe(id) : handleCancelSelectedRecipe();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditRecipe(recipe: Recipe) {

    if (recipe.id != null) {
      setRecipes([...recipes.filter(x => x.id !== recipe.id), recipe])
      axios.put(`https://localhost:5001/api/recipes/${recipe.id}`, recipe)
    } else {
      setRecipes([...recipes, { ...recipe, id: Math.random()}])
      axios.post(`https://localhost:5001/api/recipes/`, recipe)
    }

    setEditMode(false);
    setSelectedRecipe(recipe);
  }

  function handleDeleteRecipe(id: number) {
    setRecipes([...recipes.filter(x => x.id !== id)])
    axios.delete(`https://localhost:5001/api/recipes/${id}`)
  }

  return (
    <div>

      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '10em' }}>
        <RecipeDashboard
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          selectRecipe={handleSelectRecipe}
          cancelSelectRecipe={handleCancelSelectedRecipe}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditRecipe}
          deleteRecipe={handleDeleteRecipe}
        />
      </Container>


    </div>
  );
}

export default App;
