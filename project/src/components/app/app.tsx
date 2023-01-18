import { FC } from 'react';
import MainPage from '../../pages/main/main-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import SignInPage from '../../pages/sign-in/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/addReview/addReview';
import { ROUTES, AuthorizationStatus } from '../../constants/routes';
import MyListPage from '../../pages/my-list/my-list-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerPage from '../../pages/player/player-page';
import { Film } from '../../types/film.type';

type AppProps = {
  film: Film;
  filmList: Film[];
}

const App : FC<AppProps> = (props) => {
  const { film, filmList } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage film={film} filmsList={filmList}/>}/>
        <Route path={ROUTES.SIGNIN} element={<SignInPage/>}/>
        <Route
          path={ROUTES.MYLIST}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage films={filmList}/>
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.FILM} element={<FilmPage films={filmList}/>}/>
        <Route path={ROUTES.ADDREVIEW} element={<AddReviewPage/>}/>
        <Route path={ROUTES.PLAYER} element={<PlayerPage/>}/>
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
