import { ChangeEvent, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { setCity } from '../../store/action';
import { Routing } from '../../lib/types/routing';
import { AuthInfoType } from '../../lib/types/auth-data';

function Login(): React.JSX.Element {
  const [state, setState] = useState<AuthInfoType>({
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newState = {
      ...state,
      [fieldName]: fieldValue
    };

    setState(newState);
    const isNotEmptyInputs = Object.values(newState).every((value: string) => value.trim());
    setIsValid(isNotEmptyInputs && e.target.validity.valid);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (isValid) {
      dispatch(loginAction(state));
    }
  }

  function handleLinkClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch(setCity('Amsterdam'));
    navigate(Routing.Main);
  }

  return (
    <>
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="email">E-mail</label>
              <input
                onChange={handleInputChange}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="password">Password</label>
              <input
                onChange={handleInputChange}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button disabled={!isValid} className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link onClick={handleLinkClick} className="locations__item-link" to='#'>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
