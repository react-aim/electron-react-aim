// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppHeader from '@comp/common/app-header';

type Props = {};
type State = {};

class Trade extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <AppHeader value={0} />
        <p>场外交易</p>
      </div>
    )
  }
}

export default Trade;
