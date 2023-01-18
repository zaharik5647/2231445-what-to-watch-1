import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/all-genres';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({ authorizationStatus, children }: Props): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SIGNIN} />
  );
}

export default PrivateRoute;
