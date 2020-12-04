import React from 'react';
import Aux from '../../../hoc/Aux';
import './Button.css';

const orderSummary = (props) => {
        const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key = {igKey}>
                <span style= {{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>
            )
        });

   return (
       <Aux>
           <h3>Your Order</h3>
           <p>A delicious burger with following ingredients:</p>
           <ul>
             {ingredientSummary}
           </ul>
           <p>Continue to Checkout?</p>
           <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
           <button className= 'Danger' onClick= {props.clicked}>CANCEL</button>
           <button className= 'Success' onClick = {props.continueClicked}>CONTINUE</button>
       </Aux>
    )
}
 export default orderSummary;