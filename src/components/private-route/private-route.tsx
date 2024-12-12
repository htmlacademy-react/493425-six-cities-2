import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../lib/types/authorization';
import { Routing } from '../../lib/types/routing';
import { useAppSelector } from '../../hooks';
import { PropsWithChildren } from 'react';

function PrivateRoute(props: PropsWithChildren<{}>) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const {children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={Routing.Login} />
  );
}
export default PrivateRoute;
