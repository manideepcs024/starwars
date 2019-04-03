import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/homePage';
import LoginPage from './components/user/loginsPage';
import PlanetPage from './components/planets/planetsPage';
import PlanetPageDetails from './components/planets/PlanetPageDetails';
import LoggedIn from './components/common/LoggedIn';

export default (
        <Route path="/" component={App}>
                <IndexRoute component={LoggedIn} />
                <Route path="login" component={LoginPage} />

                <Route component={LoggedIn}>
                        <Route path="planets" component={PlanetPage} />
                        <Route path="planets/:id" component={PlanetPageDetails} />
                </Route>
        </Route>

);