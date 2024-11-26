export const Routing = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: '/not-found'
} as const;

export type RoutingType = (typeof Routing)[keyof typeof Routing];
