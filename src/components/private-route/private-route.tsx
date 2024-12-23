import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../lib/types/authorization';
import { Routing } from '../../lib/types/routing';
import { useAppSelector } from '../../hooks';
import { PropsWithChildren } from 'react';
import { selectAuthorizationLoading, selectAuthorizationStatus } from '../../store/user/user.selectors';
import Loader from '../loader/loader';

function PrivateRoute(props: PropsWithChildren) {
  const isLoading = useAppSelector(selectAuthorizationLoading);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (isLoading) {
    return <Loader />;
  }

  const {children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children as JSX.Element
      : <Navigate to={Routing.Login} />
  );
}
export default PrivateRoute;
