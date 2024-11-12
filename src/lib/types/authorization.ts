export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export type TAuthorizationStatus = (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
