import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layouts/Layout';
import {Route, Switch} from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
   
    render() {
        return (
            <div>
                <Layout>
                   <Switch>
                        <Route path= "/Checkout" component= {Checkout}/>
                        <Route path= "/Orders" component= {Orders}/>
                        <Route path= "/" exact component= {BurgerBuilder}/>
                   </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
