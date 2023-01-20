import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import MainPage from '../../pages/main/main-page';
import AddReview from '../../pages/addReview/addReview';
import FilmPage from '../../pages/film-page/film-page';
import SignIn from '../../pages/sign-in/sign-in-page';
import { useAppSelector } from '../../hooks/hooks';
import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list/my-list-page';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browse-history';
import PlayerPage from '../../pages/player/player-page';
import NotFoundPage from '../../pages/not-found/not-found-page';

function App(): JSX.Element {
  const { isDataLoaded, authorizationStatus, favouriteFilms } = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return <Loader/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Film} element={<FilmPage />} />
        <Route
          path={AppRoute.AddFilm}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path={AppRoute.Default} element={<NotFoundPage />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage films={favouriteFilms} />
          </PrivateRoute>
        }
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
