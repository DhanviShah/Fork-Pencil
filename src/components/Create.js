import React, { useState } from "react";
import "./Create.css";

function Create() {
  const [label, setLabel] = useState("");
  const [recipe, setRecipe] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [updateMessage, setUpdateMessage] = useState("normalMessage");

  const submitHandler = (e) => {
    e.preventDefault();
    const linesOfRecipe = recipe.split(".").map((elem) => ({ text: elem }));
    if (linesOfRecipe.length === 0) {
      return;
    }
    const toBeAdded = {
      recipe: {
        label: label,
        cuisineType: cuisineType,
        ingredients: linesOfRecipe,
      },
    };
    setUpdateMessage("addedMessage");
    setTimeout(() => setUpdateMessage("normalMessage"), 10000);
    fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toBeAdded),
    }).then(() => {
      console.log("new Recipe is Added");
      setLabel("");
      setRecipe("");
      setCuisineType("");
    });
  };

  return (
    <div className="create">
      <div className="formContainer">
        <h2>Add a new Recipe</h2>
        <form onSubmit={submitHandler}>
          <label>Recipe Name:</label>
          <input
            type="text"
            required
            autoFocus
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <label>Cuisine Type:</label>
          <input
            type="text"
            required
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
          />
          <label>Recipe:</label>
          <textarea
            required
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          ></textarea>
          <button type="submit">Add Recipe</button>
        </form>
      </div>

      <div className={updateMessage}>New Recipe is successfully added!!!</div>
    </div>
  );
}

export default Create;
