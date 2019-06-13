// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {};
type State = {};

class Page404 extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <p>Page404 Page</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    )
  }
}

export default Page404;
