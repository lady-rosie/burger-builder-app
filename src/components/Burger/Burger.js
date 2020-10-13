import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// importing styles
import classes from "./Burger.css";

const Burger = (props) => {
  let listIngredients = Object.keys(props.ingredients)
    .map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if (listIngredients.length === 0){
        listIngredients =  <p>Add ingredients</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {listIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
