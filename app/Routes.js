import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from '@con/App';
import Home from '@comp/home';
import Setting from '@comp/setting';
import Other from '@comp/other';
import Page404 from '@comp/common/page404';

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
