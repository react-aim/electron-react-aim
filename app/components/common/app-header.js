// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import '@scss/common/app-header.scss';

type Props = {
  value: number,
};
type State = {};

class AppHeader extends Component<Props, State> {
  props: Props;

  onChange = (ev, value) => {
    if(value === 0) {
      setTimeout(() => {
        // \\$FlowFixMe
        this.props.history.push('/trade');
      }, 500);
    }
    if(value === 1) {
      setTimeout(() => {
        // \\$FlowFixMe
        this.props.history.push('/order');
      }, 500);
    }
    if(value === 2) {
      setTimeout(() => {
        // \\$FlowFixMe
        this.props.history.push('/wallet');
      }, 500);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <header>
        <BottomNavigation value={value} onChange={this.onChange} showLabels>
          <BottomNavigationAction label="场外交易" />
          <BottomNavigationAction label="我的订单" />
          <BottomNavigationAction label="我的钱包" />
        </BottomNavigation>
      </header>
    )
  }
}

export default withRouter(AppHeader);
