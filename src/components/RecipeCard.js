import React from "react";
import "./RecipeCard.css";
import uuid from "react-uuid";

function RecipeCard(props) {
  const item = props.foodItem.recipe;
  return (
    <div className="recipeCard">
      <div className="recipeCard-header">
        <h3>{item.label}</h3>
        <h4>{item.cuisineType}</h4>
      </div>
      <div className="recipeCard-body">
        <ul>
          {item.ingredients ? (
            [...new Set(item.ingredients)].map((element) => (
              <li key={uuid()}>
                <span>{element.text}</span>
              </li>
            ))
          ) : (
            <li></li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default RecipeCard;
