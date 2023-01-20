import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logoutAction } from '../../store/api.action';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/all-genres';

export type Props = {
  avatar: string;
}

function AuthedUserBlock({avatar}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSignOutClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    dispatch(logoutAction());
  };
  return (
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'} > <img src={avatar} alt="User avatar" width="63" height="63"/> </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={handleSignOutClick}>Sign out</a>
      </li>
    </>
  );
}

function UserBlock(): JSX.Element {
  const { authorizationStatus, user } = useAppSelector((state) => state);
  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth
        ? <AuthedUserBlock avatar={user ? user.avatarUrl : 'img/avatar.jpg'} />
        : <Link to='/login' className='user-block__link'>Sign in</Link>}
    </ul>
  );
}

export default UserBlock;
