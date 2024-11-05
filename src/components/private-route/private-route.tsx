import {Navigate} from 'react-router-dom';
import { AuthorizationStatusType, AuthorizationStatus, Routing } from '../../lib/types/types';
import React from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatusType;
  children: React.JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={Routing.Login} />
  );
}
export default PrivateRoute;
