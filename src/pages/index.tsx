import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';
import SynthPage from './SynthPage';

export const index: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/" component={Landing} />
        <Route exact strict path="/dashboard" component={Dashboard} />
        <Route exact strict path="/synth/:synthName" component={SynthPage} />
      </Switch>
    </Router>
  );
};

export default index;
