import React from 'react';
import Burger from '../../Burger/Burger';
import '../../Burger/OrderSummary/Button.css';
import './CheckoutSummary.css';

const checkoutSummary = (props) => (
    <div className= 'CheckoutSummary'>
        <h4>we hope it tastes delicious!</h4>
        <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredient= {props.ingredient}/>
        </div>
        <button className= 'Danger' onClick= {props.checkoutCancelled}>CANCEL</button>
        <button className= 'Success' onClick= {props.checkoutContinued}>CONTINUE</button>
    </div>
);

export default checkoutSummary;