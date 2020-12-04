import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';

class Layout extends Component{
    state= {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
                return{showSideDrawer : !prevState.showSideDrawer}
        })

    }
    render () {
        return (
        <Aux>
            <Toolbar toggleSideDrawer= {this.sideDrawerToggleHandler}/>
            <SideDrawer open= {this.state.showSideDrawer} closed= {this.showSideDrawerHandler}/>
            <main className = "Content" style={{marginTop: '72px'}}>
                {this.props.children}
            </main>
         </Aux>
         )
    }
}
    
export default Layout;