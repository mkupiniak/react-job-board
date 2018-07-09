import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import rootReducer from './reducers';
import './index.css';

const logger = createLogger({ collapsed: true });
const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
