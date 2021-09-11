import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Recipe } from "../../app/Models/recipe";

interface Props {
    recipe: Recipe
    cancelSelectRecipe: () => void;
    openForm: (id: number) => void;

}


export default function RecipeDetails({recipe, cancelSelectRecipe, openForm} : Props) {
    return (
        <Card>

            <Image src={`/assets/recipeImages/${recipe.title}`}/>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Meta>
                <span>{recipe.date}</span>
            </Card.Meta>
            <Card.Description>
                {recipe.method}
            </Card.Description>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(recipe.id)} color='blue' content='Edit'/>
                    <Button onClick={cancelSelectRecipe} button content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}