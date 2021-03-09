import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContextProviders from '@/contexts';
import './degenerative.css';

import { Landing, Dashboard, SynthPage } from '@/pages';
import { Sidebar } from '@/components';

const App: React.FC = () => {
  return (
    <Router>
      <ContextProviders>
        <Sidebar />
        <Switch>
          <Route exact strict path="/" component={Landing} />
          <Route exact strict path="/dashboard" component={Dashboard} />
          <Route exact strict path="/synth/:synthName" component={SynthPage} />
        </Switch>
      </ContextProviders>
    </Router>
  );
};

export default App;
