import React from 'react';
import './Order.css';

const order = (props) => {
       const ingredient = [];

       for (let ingredientName in props.ingredient){
                ingredient.push (
                {
                      name : ingredientName,
                      amount : props.ingredient[ingredientName]
                })
        };

        const ingredientOutput = ingredient.map(ing => {
              return <span key= {ing.name} style= {{border: '1px solid #ccc',
                                     //boxSizing: 'border-box',
                                     textTransform: 'capitalize',
                                     display: 'inline-block',
                                     margin: '0 7px',
                                     padding: '2px',
                                     borderRadius: '5px'}}>

                                        {ing.name} ({ing.amount})
                      </span>
        });
    
    return(
        <div className= 'Order'>
            <p>Ingredients: <span>{ingredientOutput}</span></p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)} </strong></p>
        </div>
    );
        
};

export default order;