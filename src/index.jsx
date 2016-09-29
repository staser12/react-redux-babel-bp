import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import MainComponent from './components/MainComponent';

ReactDOM.render(
  <AppContainer>
  <MainComponent />
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/MainComponent', () => {
    const NextApp = require('./components/MainComponent').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
