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
        <h4>Page Not Found</h4>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    )
  }
}

export default Page404;
