import React from 'react';
import './burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) =>{
    let transformedIngredients= Object.keys(props.ingredient)
    .map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_, i) => {
            return <BurgerIngredients key ={igKey + i} type = {igKey}/>;
       });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
      transformedIngredients = <p>Start adding the ingredients</p>
    }
    
    return(
      <div className= 'Burger'>
            <BurgerIngredients type= "bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type= "bread-bottom"/>
      </div>
    );
}

export default burger;