//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom'

import App from './components/App'

//Components
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const AppRoutes = () => 
    <App>        
        <Switch>
            <Route exact path="/" component={Home}/>   
            <Route exact path="/about" component={About}/>   
            <Route exact path="/contact" component={Contact}/>                            
        </Switch>     
    </App>

export default AppRoutes;