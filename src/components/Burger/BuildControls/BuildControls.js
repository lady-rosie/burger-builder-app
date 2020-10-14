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
      <BuildControl key={ingredient.label} label={ingredient.label} />
    ))}
  </div>
);

export default BuildControls;