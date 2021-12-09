import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import uuid from "react-uuid";
import RecipeCard from "./RecipeCard";
import "./Recipes.css";

function Recipes() {
  const [foodName, setFoodName] = useState("");
  const [inputName, setInputName] = useState("");
  const [data, setData] = useState([]);
  const [addedData, setAddedData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setFoodName(inputName);
  };

  const changeHandler = (e) => {
    setInputName(e.target.value);
  };

  const didMountRef = useRef(false);
  const didMountRef1 = useRef(false);

  useEffect(() => {
    if (didMountRef1.current) {
      fetch("http://localhost:8000/recipes")
        .then((response) => response.json())
        .then((res) => {
          console.log("Working fine here", res);
          setAddedData(res);
        })
        .catch((error) => console.log("Error in the Added Data", error));
    } else {
      didMountRef1.current = true;
    }
  }, [foodName]);

  useEffect(() => {
    if (didMountRef.current) {
      axios
        .get(
          "https://api.edamam.com/search?app_id=3826a895&app_key=07d64a29b6cd6f3c11704ceaa67f17cf&q=" +
            foodName
        )
        .then((response) => {
          console.log(response.data.hits);
          setData(response.data.hits);

          // console.log(data);
        })
        .catch((error) => console.log("Error Param Error", error));
    } else {
      didMountRef.current = true;
    }
  }, [foodName]);

  return (
    <div>
      <header>
        <h1 className="title">Recipe-search</h1>
        <h2 className="subtitle">Discover the Recipes for your food!</h2>
        <form onSubmit={submitHandler} id="search" name="search">
          <input
            type="text"
            name="name"
            autoFocus
            onChange={changeHandler}
            placeholder="Type a food or a meal..."
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {/* <div>
        
      </div> */}
      <section>
        <div className="card-container" id="recipeResult">
          {addedData
            .filter(
              (elem) =>
                elem.recipe.label.toLowerCase() === foodName.toLowerCase()
            )
            .map((item) => (
              <RecipeCard foodItem={item} key={uuid()} />
            ))}
          {data.map((item) => (
            <RecipeCard foodItem={item} key={uuid()} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Recipes;
