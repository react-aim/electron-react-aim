import { createStore } from 'redux';
import { createHashHistory } from 'history';
// import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers';

const history = createHashHistory();

const rootReducer = createRootReducer(history);

const configureStore = (initialState?: any) => {
  // Create Store
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(
      '../reducers',
      // eslint-disable-next-line global-require
      () => store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
};

export default { configureStore, history };
