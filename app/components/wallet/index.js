// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppHeader from '@comp/common/app-header';

type Props = {};
type State = {};

class Wallet extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <AppHeader value={2} />
        <p>我的钱包</p>
      </div>
    )
  }
}

export default Wallet;
