import React from 'react';
import './Hamburger.css';

const hamburger = (props) => (
    <div className='HamburgerToggle' onClick= {props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default hamburger;