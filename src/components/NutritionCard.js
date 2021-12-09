import React from "react";
import "./NutritionCard.css";

function NutritionCard(props) {
  const item = props.foodItem;
  return (
    <div className="card">
      <div className="card-header">
        <h3>{item.food.label}</h3>
        <h4>{item.food.category}</h4>
      </div>
      <div className="card-body">
        <ul>
          {item.food.nutrients.ENERC_KCAL ? (
            <li>
              <b>Energy: </b>
              <span>{item.food.nutrients.ENERC_KCAL.toFixed(1)}kcal</span>
            </li>
          ) : (
            <li></li>
          )}
          {item.food.nutrients.CHOCDF ? (
            <li>
              <b>Carbs: </b>
              <span>{item.food.nutrients.CHOCDF.toFixed(1)}g</span>
            </li>
          ) : (
            <li></li>
          )}
          {item.food.nutrients.PROCNT ? (
            <li>
              <b>Protein: </b>
              <span>{item.food.nutrients.PROCNT.toFixed(1)}g</span>
            </li>
          ) : (
            <li></li>
          )}
          {item.food.nutrients.FAT ? (
            <li>
              <b>Fat: </b>
              <span>{item.food.nutrients.FAT.toFixed(1)}g</span>
            </li>
          ) : (
            <li></li>
          )}
        </ul>
      </div>
      {item.food.nutrients.brand ? (
        <div className="card-footer">
          <p>
            <b>Brand: </b>
            <span>{item.food.nutrients.brand || "None :("}</span>
          </p>
        </div>
      ) : null}
      {/* <div className="card-footer">
        <p>
          <b>Brand: </b>
          <span>{item.food.nutrients.brand || "None :("}</span>
        </p>
      </div> */}
    </div>
  );
}

export default NutritionCard;
