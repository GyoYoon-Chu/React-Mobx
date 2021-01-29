import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'mobx-react';
import counterStore from './store/CounterStore';

ReactDOM.render(
  <Provider counterStore={counterStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
