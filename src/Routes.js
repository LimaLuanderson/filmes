import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './component/Header/Header';

import Erro from './pages/Erro/Erro';
import Home from './pages/Home/Home';
import Filme from './pages/Filme/Filme';  


const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/filme/:id" component = {Filme} />
                <Route path = "*" component = {Erro} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;