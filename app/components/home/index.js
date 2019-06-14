// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {};
type State = {};

class Home extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <h3>Home</h3>
        <ul>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
          <li>
            <Link to="/303">Not Found Page</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home;
