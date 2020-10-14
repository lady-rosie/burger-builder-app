import React from "react";
import classes from "./BuildControl.css";

const BuildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}> {props.label} </div>
    <button
      className={classes.Less}
      onClick={props.remove}
      disabled={props.disable}
    >
      Less
    </button>
<p>{props.numIngredient}</p>
    <button className={classes.More} onClick={props.add}>
      More
    </button>
  </div>
);

export default BuildControl;
