import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Report from '../pages/SongReport';

const Routes: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/songsReport" component={Report} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
