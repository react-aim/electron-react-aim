// @flow
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './containers/App';
import Home from './components/home';
import Setting from './components/setting';
import Other from './components/other';
import Page404 from './components/common/page404';

export default () => (
  <App>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/other" component={Other} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </App>
)
