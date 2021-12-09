import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NutritionCard from "./NutritionCard";
import "./Nutritions.css";

function Home() {
  const [foodName, setFoodName] = useState("");
  const [inputName, setInputName] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setFoodName(inputName);
  };

  const changeHandler = (e) => {
    setInputName(e.target.value);
  };

  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      axios
        .get(
          "https://api.edamam.com/api/food-database/parser?app_id=ca747d07&app_key=722fabaee32b8118f7b1cb2e32b137cf&ingr=" +
            foodName
        )
        .then((response) => {
          console.log(response.data.hints);
          setData(response.data.hints);
        })
        .catch((error) => console.log("Error Param Error", error));
    } else {
      didMountRef.current = true;
    }
  }, [foodName]);

  return (
    <div>
      <header>
        <h1 className="title">Nutritions-search</h1>
        <h2 className="subtitle">
          Discover the nutritional information for your food!
        </h2>
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
        <div className="card-container" id="result">
          {data.map((item) => (
            <NutritionCard
              foodItem={item}
              key={item.food.foodId + item.food.label}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
