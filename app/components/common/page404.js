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
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    )
  }
}

export default Page404;
