import MainPage from '../../pages/main/main-page';
import SignInPage from '../../pages/sign-in/sign-in-page';
import FilmPage from '../../pages/film-page/film-page';
import { AppRoute } from '../../constants/all-genres';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerPage from '../../pages/player/player-page';
import { useAppSelector } from '../../hooks/hooks';
import Loader from '../loader/loader';
import { Review } from '../../types/review-type';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list/my-list-page';
import AddReview from '../../pages/addReview/addReview';
import NotFoundPage from '../../pages/not-found/not-found-page';

type Props = {
  reviews: Review[];
}

function App({reviews}: Props): JSX.Element {
  const { isDataLoaded, films, authorizationStatus } = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return <Loader/>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={
          <MainPage
            film={films[0]}
          />
        }
        />
        <Route path={AppRoute.SIGNIN} element={<SignInPage />} />
        <Route path={AppRoute.FILM} element={<FilmPage film={films[0]} films={films} reviews={reviews}/>} />
        <Route path={AppRoute.ADDREVIEW} element={<AddReview film={films[0]} />} />
        <Route path={AppRoute.PLAYER} element={<PlayerPage film={films[0]}/>} />
        <Route path={AppRoute.NOTFOUND} element={<NotFoundPage />} />
        <Route path={AppRoute.MYLIST} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage films={films} />
          </PrivateRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
