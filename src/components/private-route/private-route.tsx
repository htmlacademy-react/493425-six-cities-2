import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../lib/types/authorization';
import { Routing } from '../../lib/types/routing';
import { useAppSelector } from '../../hooks';
import { PropsWithChildren } from 'react';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';

function PrivateRoute(props: PropsWithChildren) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const {children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={Routing.Login} />
  );
}
export default PrivateRoute;
