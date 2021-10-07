import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeScreen, ProductScreen, CartScreen } from '../screens';


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
        </Switch>
    )
}