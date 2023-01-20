import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useNavigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import { FormEvent, useEffect, useRef } from 'react';
import { loginAction } from '../../store/api.action';
import {redirectToRoute} from '../../store/actions';


function SignInPage() : JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth){
      navigate(AppRoute.Main);
    }
  });

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const isPasswordValid = (password: string) => password.match(/\w/) && password.match(/\d/);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null
      && isPasswordValid(passwordRef.current.value)){
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
      dispatch(redirectToRoute(AppRoute.Main));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="/" className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email" ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password" ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default SignInPage;
