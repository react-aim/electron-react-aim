// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '@scss/common/app-header.scss';

type Props = {};
type State = {};

class AppHeader extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <header>
        <h3>Header</h3>
      </header>
    )
  }
}

export default withRouter(AppHeader);
