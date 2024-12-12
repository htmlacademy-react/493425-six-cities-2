import {Navigate} from 'react-router-dom';
import React from 'react';
import { AuthorizationStatus } from '../../lib/types/authorization';
import { Routing } from '../../lib/types/routing';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const {children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={Routing.Login} />
  );
}
export default PrivateRoute;
