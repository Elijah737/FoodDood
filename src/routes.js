import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Business from './components/Business';
import Restaurant from './components/Restaurant';
import Checkout from './components/Checkout';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/business' component={Business} />
        <Route path='/restaurant' component={Restaurant} />
        <Route path='/checkout' component={Checkout} />
    </Switch>
);