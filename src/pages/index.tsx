import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';
import Asset from './Asset';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/" component={Landing} />
        <Route exact strict path="/dashboard" component={Dashboard} />
        <Route exact strict path="/asset/:synthName" component={Asset} />
      </Switch>
    </Router>
  );
};
