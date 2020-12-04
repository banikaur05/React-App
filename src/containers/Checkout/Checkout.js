import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/checkoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';

class Checkout extends Component {
    state = {
        ingredient: null,
        price: 0
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredient = {};
        let price = 0;
        for (let param of query.entries()) {
            //'salad' = '1'
            if(param[0] === 'price'){
                  price = param[1];
            }else {
                ingredient[param[0]] = +param[1];
            }
            
        }
        this.setState({
            ingredient: ingredient,
            totalPrice: price
        });
    }
    clickCancelledHandler = () => {
        this.props.history.goBack();
    }

    clickContinuedHandler = () => {
        this.props.history.replace('/Checkout/Contact-Form')
    }
    render() {
        return(
            <div>
                <CheckoutSummary ingredient = {this.state.ingredient} 
                         checkoutCancelled= {this.clickCancelledHandler}
                         checkoutContinued= {this.clickContinuedHandler}/>
                <Route path= {this.props.match.path + '/Contact-Form'}
                    render= {(props) => (<ContactForm ingredient= {this.state.ingredient} price= {this.state.totalPrice} {...props}/>)}/>
            </div>
            
        );
    }

}

export default Checkout;