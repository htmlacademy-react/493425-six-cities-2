import { createAction } from '@reduxjs/toolkit';
import { NameSpace } from '../lib/types/state';
import { RoutingType } from '../lib/types/routing';

export const redirectToRoute = createAction<RoutingType>(`${NameSpace.User}/redirectToRoute`);
