// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  history: Object,
};
type State = {};

class Page404 extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <p>Page Not Found!</p>
        <Link to="/">首页</Link>
      </div>
    )
  }
}

export default Page404;
