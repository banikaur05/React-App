import React from 'react';
import burgerLogo from '../../assests/Images/burger-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className= 'Logo'>
      <img src = {burgerLogo} alt = 'myLogo'/>
    </div>
);

export default logo;