import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
//import Axios from 'axios';


const IngredientPrice = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}
class BurgerBuilder extends Component{
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loader: false,
        error: false
    }

    componentDidMount () {
        console.log(this.props)
        axios.get('https://react-backend-70c63.firebaseio.com/ingredients.json')
        .then (response => {
            this.setState({
                ingredients: response.data
            });
        })
        .catch (error => {
            this.setState({error: true})
        })
    }
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldcount= this.state.ingredients[type];
        const newCount= oldcount + 1;
        const updatedIngredients= {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const addPrice = IngredientPrice[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addPrice;
        this.setState({
               totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldcount= this.state.ingredients[type];
        if (oldcount <= 0)
        {
            return;
        }
        const newCount= oldcount - 1;
        const updatedIngredients= {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const deductPrice = IngredientPrice[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - deductPrice;
        this.setState({
               totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    PurchasingHandler = () =>{
        this.setState({
               purchasing: true
        });
    }

    PurchaseCancelHandler =() => {
        this.setState({
             purchasing: false
        }); 
    }

    PurchaseContinueHandler = () => {
        
        const queryParam = [];
        for(let i in this.state.ingredients){
             queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParam.push('price=' + this.state.totalPrice)
        const queryString= queryParam.join('&')
        this.props.history.push({
            pathname: "/Checkout",
            search: '?' + queryString
        })

    }  
    render(){
        const disabled = {
            ...this.state.ingredients
        };

        for(let key in disabled){
            disabled[key] = disabled[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded.</p> : <Spinner/> 
        if(this.state.ingredients){
           burger = (
              <Aux>
                   <Burger ingredient= {this.state.ingredients}/>
                   <BuildControls ingredientAdded ={this.addIngredientHandler}
                           ingredientRemoved ={this.removeIngredientHandler}
                           disable= {disabled}
                           purchasable= {this.state.purchasable}
                           ordered = {this.PurchasingHandler}
                           price={this.state.totalPrice} />
              </Aux>
            
        );

            orderSummary= <OrderSummary ingredients = {this.state.ingredients} 
                  clicked= {this.PurchaseCancelHandler}
                  continueClicked= {this.PurchaseContinueHandler}
                  price = {this.state.totalPrice}/>

            if(this.state.loader){
                  orderSummary= <Spinner/>
            }
        }
         return(
             <Aux>
                 <Modal show = {this.state.purchasing} closeModal= {this.PurchaseCancelHandler}>
                     {orderSummary}
                 </Modal>
                 {burger}
             </Aux>
         )
    }
}

export default withErrorHandler(BurgerBuilder, axios);
