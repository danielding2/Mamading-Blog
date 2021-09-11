import React from "react";
import { Button, Card, Label } from "semantic-ui-react";
import { Recipe } from "../../app/Models/recipe";

interface Props {
    recipes: Recipe[];
    selectRecipe: (id: number) => void;
    deleteRecipe: (id: number) => void;
}

export default function RecipeList({ recipes, selectRecipe, deleteRecipe }: Props) {
    return (

            <Card.Group itemsPerRow={3}>
                {recipes.map(recipe => (
                    <Card key={recipe.id}>
                        <Card.Content>
                            <Card.Header as='a'>{recipe.title}</Card.Header>
                            <Card.Meta>{recipe.date}</Card.Meta>     
                            <Label>{recipe.category}</Label>
                            <Card.Description>{recipe.method}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>

                                <Button onClick={() => selectRecipe(recipe.id)} color='blue'>View</Button>
                                <Button onClick={() => deleteRecipe(recipe.id)} color='red'>Delete</Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>

    )
}