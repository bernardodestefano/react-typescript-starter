import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import './main.scss';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
