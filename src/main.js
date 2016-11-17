import React from 'react';
import {render} from 'react-dom';
// import {Provider} from 'react-redux';
// import {syncHistoryWithStore} from 'react-router-redux';
// import {browserHistory} from 'react-router';

// import configureStore from './redux/configureStore';
import Application from './Application';

const mountNode = document.getElementById('mount');

let CurrentApplication = Application;

// const store = configureStore();
// window.store = store;


// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);

export function renderApplication() {
  // const group = (
  //   <Provider store={store}>
  //     <CurrentApplication history={history} />
  //   </Provider>
  // );
  const group = (
    <CurrentApplication />
  );
  render(group, mountNode);
}

renderApplication();

/**
 * Hot-reloading.
 */
if (module.hot) {
  module.hot.accept('./Application', function() {
    CurrentApplication = require('./Application').default;
    renderApplication();
  });
}
