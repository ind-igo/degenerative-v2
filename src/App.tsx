import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContextProviders from '@/contexts';
import './degenerative.css';

import { Landing, Synth, AllSynths, Portfolio } from '@/pages';
import { Sidebar } from '@/components';

const App: React.FC = () => {
  return (
    <Router>
      <ContextProviders>
        <Sidebar />
        <Switch>
          <Route exact strict path="/" component={Landing} />
          <Route exact strict path="/portfolio" component={Portfolio} />
          <Route exact strict path="/synths" component={AllSynths} />
          <Route exact strict path="/synths/:group" component={Synth} /> {/* TODO */}
          <Route exact strict path="/synths/:group/:synthName" component={Synth} />
        </Switch>
      </ContextProviders>
    </Router>
  );
};

export default App;
