import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ingredient) => (
      <BuildControl
        key={ingredient.label}
        label={ingredient.label}
        add={() => props.addIngredient(ingredient.type)}
        remove={() => props.removeIngredient(ingredient.type)}
        numIngredient={props.ingredients[ingredient.type]}
        disable={props.disable[ingredient.type]}
      />
    ))}
    <div className={classes.TotalPrice}>
      <p>
        Total: <strong>{props.price.toFixed(2)}$</strong>
      </p>
    </div>
    <button className={classes.OrderButton}>ORDER NOW</button>
  </div>
);

export default BuildControls;
