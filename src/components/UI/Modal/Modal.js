import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
      <Backdrop show= {props.show} clicked = {props.closeModal}/>
    <div 
       className= 'Modal'
       style ={{transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
       opacity : props.show ? 1 : 0}}
    >
       <div>{props.children}</div>
    </div>
  </Aux>
)


export default modal;