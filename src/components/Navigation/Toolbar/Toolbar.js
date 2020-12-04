import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems'; 
import Hamburger from '../SideDrawer/Hamburger/Hamburger';


const toolbar = (props) => (
    <header className= 'Toolbar'>
       <Hamburger clicked= {props.toggleSideDrawer}/>
       <div className= 'ToolbarLogo'>
           <Logo/>
       </div>
       
       <nav className= 'DesktopOnly'>
           <NavigationItems/>
       </nav>
    </header>

);

export default toolbar;