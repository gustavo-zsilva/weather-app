import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WeatherApp from './pages/WeatherApp';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={WeatherApp} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;