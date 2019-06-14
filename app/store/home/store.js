// @flow
import { observable, action } from 'mobx';

class Store {
  @observable num = 0;

  @action.bound
  increment = (value) => this.num++;
}

export default Store;
