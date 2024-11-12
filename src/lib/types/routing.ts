export const Routing = {
  Empty: '',
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: '/not-found'
} as const;

export type TRouting = (typeof Routing)[keyof typeof Routing];
