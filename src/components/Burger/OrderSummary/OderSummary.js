import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => {
            return (
            <li key = {igKey}>
                <span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        }); 

    return (
        <Aux>
           <h3>Your order</h3>
           <p> A delicious burger with:</p>
           <ul>
            {ingredientSummary}
           </ul>
           <Button btnType="Danger" clicked={props.orderCancel}>CANCEL</Button>
           <Button btnType="Success" clicked={props.orderContinued}>CONTINUE TO CHECKOUT</Button>

        </Aux>
    );

};

export default OrderSummary;