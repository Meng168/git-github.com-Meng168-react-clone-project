import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { getTotals } from './redux/features/cartSlice';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Jost-Black.ttf';
import './index.css'
import './styles/@media.css'

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={store}>
        <App />
    </Provider>
  </React.Fragment>
);