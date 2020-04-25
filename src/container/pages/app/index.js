import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import * as AppRoutes from 'config/';

import Landing from 'container/pages';


function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={AppRoutes.Landing}
          component={Landing}
        />
        <Redirect from="*" to="/error-404" />
      </Switch>
    </Router>
  );
}

export default App;
