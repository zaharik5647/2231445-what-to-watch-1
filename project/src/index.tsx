import 'react-toastify/dist/ReactToastify.min.css';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFavouriteFilms, fetchFilmsAction} from './store/api.action';
import { ToastContainer } from 'react-toastify';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browse-history';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchFavouriteFilms());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}/>
      <ToastContainer/>
      <App />
    </Provider>
  </StrictMode>
);

