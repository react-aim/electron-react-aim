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

  }

  render() {
    return (
      <App>
        <AppHeader />

        <div>
          <p>Home Page</p>
          <ul>
            <li>
              <Button variant="contained" color="primary">Primary</Button>
            </li>
            <li>
              <Button variant="contained" color="secondary">Secondary</Button>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/setting">Setting</Link>
            </li>
            <li>
              <Link to="/other">Other</Link>
            </li>
            <li>
              <Link to="/303">Not Found</Link>
            </li>
          </ul>
        </div>
      </App>
    )
  }
}

export default Home;
