import React from "react";
import { Grid } from "semantic-ui-react";
import { Recipe } from "../../app/Models/recipe";
import RecipeDetails from "./RecipeDetails";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

interface Props {
    recipes: Recipe[];
    selectedRecipe: Recipe | undefined;
    selectRecipe: (id: number) => void;
    cancelSelectRecipe: () => void;
    editMode: boolean;
    openForm: (id: number) => void;
    closeForm: () => void;
    createOrEdit: (recipe: Recipe) => void;
    deleteRecipe: (id: number) => void;
}

export default function RecipeDashboard({ recipes, selectedRecipe, selectRecipe, cancelSelectRecipe, editMode, openForm, closeForm, createOrEdit, deleteRecipe}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <RecipeList
                    recipes={recipes}
                    selectRecipe={selectRecipe}
                    deleteRecipe={deleteRecipe}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedRecipe &&
                    <RecipeDetails
                        recipe={selectedRecipe}
                        cancelSelectRecipe={cancelSelectRecipe}
                        openForm={openForm}
                    />}
                {editMode &&
                    <RecipeForm
                        recipe={selectedRecipe}
                        closeForm={closeForm}
                        createOrEdit={createOrEdit}
                    />}
            </Grid.Column>
        </Grid>
    )
}