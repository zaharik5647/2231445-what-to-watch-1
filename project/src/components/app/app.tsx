import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants/all-genres';
import MainPage from '../../pages/main/main-page';
import AddReview from '../../pages/addReview/addReview';
import FilmPage from '../../pages/film-page/film-page';
import NotFound from '../../pages/not-found/not-found-page';
import Player from '../../pages/player/player-page';
import SignIn from '../../pages/sign-in/sign-in-page';
import { useAppSelector } from '../../hooks/hooks';
import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list/my-list-page';
import HistoryRouter from "../history-router/history-router";
import browserHistory from "../../browse-history";

function App(): JSX.Element {
  const { isDataLoaded, films, authorizationStatus } = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return <Loader/>;
  }


  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.MAIN} element={
          <MainPage
            film={films[0]}
          />
        }
        />
        <Route path={AppRoute.SIGNIN} element={<SignIn />} />
        <Route path={AppRoute.FILM} element={<FilmPage />} />
        <Route
          path={AppRoute.ADDREVIEW}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.PLAYER} element={<Player film={films[0]}/>} />
        <Route path={AppRoute.NOTFOUND} element={<NotFound />} />
        <Route path={AppRoute.MYLIST} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage films={films} />
          </PrivateRoute>
        }
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
