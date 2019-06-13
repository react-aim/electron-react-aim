// @flow
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@comp/home';
import Trade from '@comp/trade';
import Order from '@comp/order';
import Wallet from '@comp/wallet';
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
          <Route exact path="/trade" component={Trade} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/wallet" component={Wallet} />
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
