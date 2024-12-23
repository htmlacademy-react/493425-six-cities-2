export const Routing = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  FavoritesEmpty: '/favorites-empty',
  Offer: '/offer',
  NotFound: '/not-found'
} as const;

export type RoutingType = (typeof Routing)[keyof typeof Routing];
