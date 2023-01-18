import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockFilms } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const film = mockFilms[0];

root.render(
  <React.StrictMode>
    <App film={mockFilms[0]} filmList={mockFilms}/>
    <App film={film} filmList={mockFilms}/>
  </React.StrictMode>,
);
