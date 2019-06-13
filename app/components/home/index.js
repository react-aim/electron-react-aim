// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import App from '@comp/App';
import AppHeader from '@comp/common/app-header';

type Props = {};
type State = {};

class Home extends Component<Props, State> {
  props: Props;

  componentDidMount() {
    // console.log('Hover');
    // \\$FlowFixMe
    this.props.history.replace('/trade');
  }

  render() {
    return (
      <App>
        <AppHeader />
      </App>
    )
  }
}

export default Home;
