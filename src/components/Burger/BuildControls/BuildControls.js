import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.js'

const controls =[
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]
const buildControls = (props) => (
    <div className= 'buildControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
          {controls.map(ctrl => (
                 <BuildControl 
                      key={ctrl.label} 
                      label={ctrl.label} 
                      added= {()=>props.ingredientAdded(ctrl.type)}
                      removed= {() => props.ingredientRemoved(ctrl.type)}
                      disabled= {props.disable[ctrl.type]}/>
          ))}
          <button 
              className='OrderButton' 
              disabled= {!props.purchasable}
              onClick = {props.ordered}>
                  ORDER NOW
          </button>
    </div>
)

export default buildControls;