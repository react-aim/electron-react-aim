// @flow
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@comp/home';
import Setting from '@comp/setting';
import Other from '@comp/other';
import Page404 from '@comp/common/page404';

type Props = {};
type State = {};

class AppRouter extends Component<Props, State> {
  props: Props;

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/setting" component={Setting} />
          <Route exact path="/other" component={Other} />
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
