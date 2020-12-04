import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo.js';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
      
    return(
        <Aux>
          <Backdrop show= {props.open} clicked={props.closed}/>
            <div className='SideDrawer' style ={{transform : props.open ? 'translateX(0)' : 'translateX(-100%)',
                 opacity : props.open ? 1 : 0}}>
               <div className= 'SidedrawerLogo'>
                <Logo/>
               </div>
            
               <nav>
                   <NavigationItems/>
               </nav>
            </div>
        </Aux>
       

    )
}

export default sideDrawer;
