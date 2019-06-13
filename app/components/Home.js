// @flow
import React, { Component } from 'react';

type Props = {};
type State = {};

class Home extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <h2>Home, Electron!</h2>
      </div>
    )
  }
}

export default Home;
