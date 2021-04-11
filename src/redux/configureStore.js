import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';

const reducers = combineReducers({
  ...allReducers,
});

export default () => {
  const store = createStore(reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk, promise))
  );

  return store;
};
