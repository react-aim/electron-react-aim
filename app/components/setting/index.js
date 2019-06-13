// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppHeader from '@comp/common/app-header';

type Props = {};
type State = {};

class Setting extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <AppHeader />
        <p>Setting Page</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Setting;
