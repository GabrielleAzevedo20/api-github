/* eslint-disable react/jsx-indent */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Repository from '../pages/repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/pokemon/:name" component={Repository} />
    </Switch>
);

export default Routes;
