// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppHeader from '@comp/common/app-header';

type Props = {};
type State = {};

class Other extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <AppHeader />
        <p>Other Page</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Other;
