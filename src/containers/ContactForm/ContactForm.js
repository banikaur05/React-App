import React, {Component} from 'react';
import '../../components/Burger/burger.css';
import './ContactForm.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';

class ContactForm extends Component {
    state = {
        orderDetails: {
            name: {
                elementType: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'Your Street'
                },
                value: ''
            },
            suburb: {
                elementType: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'Your Suburb'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                     type: 'email',
                     placeholder: 'E-Mail'
                },
                value: ''
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest'},
                        { value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                     
                },
                                            
            }
        },
        loader: false,

    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loader: true})
        const order = {
             ingredient: this.props.ingredient,
             price: this.props.price,
             
        }
        axios.post('/orders.json', order)
        .then( response => {
            this.setState({loader: false})
            this.props.history.push('/');
        }
            )
        .catch(error => {
            this.setState({loader: false})
        });
    }
        
    render(){
        const formArray= [];

        for(let key in this.state.orderDetails){
             formArray.push({
                  id: key,
                  config: this.state.orderDetails[key]
            });
        }
        let file = (
        <div>
           <form>
               {formArray.map(array => (
                    <Input key= {array.id}
                           elementType={array.config.elementType} 
                           elementConfig={array.config.elementConfig}
                           value= {array.config.value}>

                    </Input>
               ))}
            </form>
            <button className= 'Success' onClick= {this.orderHandler}>ORDER</button>
        </div>
        );
        if (this.state.loader){
             file = <Spinner/>
        }
        return (
        <div className= 'Form'>
            {file}
        </div>
        );
    }
}

export default ContactForm;