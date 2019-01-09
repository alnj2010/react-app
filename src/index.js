//Dependencias
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//Routes
import AppRoutes from './routes';

//Assets
import './index.css';



render(
<BrowserRouter>
    <AppRoutes/>
</BrowserRouter>,
document.getElementById('root'));
