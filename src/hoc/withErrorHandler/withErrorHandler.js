import React, {Component} from 'react';
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state= {
            error: null
        }
        componentWillMount () {
            this.reqinterceptor= axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req;
            });
            this.resinterceptor= axios.interceptors.response.use(res => res, error => {
                this.setState({
                       error: error
                });
            });
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqinterceptor);
            axios.interceptors.response.eject(this.resinterceptor);
        }

        errorHandler = () => {
              this.setState({
                  error: null
              });
        }
        render () {
           return( 
               <Aux>
                   <Modal show= {this.state.error}
                          closeModal= {this.errorHandler}>
                          {this.state.error ? this.state.error.message : null}
                   </Modal>
                   <WrappedComponent {...this.props}/>
               </Aux>
               
           );
        }
    }
}

export default withErrorHandler;