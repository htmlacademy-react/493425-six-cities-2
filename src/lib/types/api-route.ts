import { APIRoute } from '../../const';

export type APIRouteType = (typeof APIRoute)[keyof typeof APIRoute];
