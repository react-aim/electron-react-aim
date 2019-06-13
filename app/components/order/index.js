// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppHeader from '@comp/common/app-header';

type Props = {};
type State = {};

class Order extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <AppHeader value={1} />
        <p>我的订单</p>
      </div>
    )
  }
}

export default Order;
