import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';


const navigationItems = () => (
      <ul className= 'NavigationItems'>
          <NavigationItem link="/" exact>Burger Builder</NavigationItem>
          <NavigationItem link= "/Orders">Order</NavigationItem>
      </ul>
);

export default navigationItems;