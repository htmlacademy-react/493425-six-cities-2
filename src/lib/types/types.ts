export const Place = {
  Private: 'Private room',
  Apartment: 'Apartment'
} as const;

export type PlaceType = (typeof Place)[keyof typeof Place];

export type Card = {
  id: number;
  isPremium: boolean;
  imgSrc: string;
  price: number;
  inBookmarks: boolean;
  rating: number;
  name: string;
  type: PlaceType;
  city: string;
};

export const Routing = {
  Empty: '',
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: '/not-found'
} as const;

export type RoutingType = (typeof Routing)[keyof typeof Routing];

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export type AuthorizationStatusType = (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

export type ReviewFormValue = {
  review: string;
  rating: number;
};
