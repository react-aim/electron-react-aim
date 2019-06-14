// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';

import Store from '../../store/home/store';

const store = new Store();

type Props = {};
type State = {};

@observer
class Home extends Component<Props, State> {
  props: Props;

  onIncrement = (value) => store.increment(value);

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

        <ul>
          <li>
            <Button variant="contained" color="primary">Primary</Button>
          </li>
          <li>
            <Button variant="contained" color="secondary">Secondary</Button>
          </li>
        </ul>

        <div>
          <p>{store.num}</p>
          <p>
            <Button variant="contained" color="primary" onClick={this.onIncrement}>
              Increment
            </Button>
          </p>
        </div>
      </div>
    )
  }
}

export default Home;
