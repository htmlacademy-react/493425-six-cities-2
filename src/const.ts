import { RoutingType, Routing } from './lib/types/routing';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const LAYOUT_CLASSES: Record<RoutingType, string[]> = {
  [Routing.Main]: ['page--gray', 'page--main'],
  [Routing.Favorites]: [],
  [Routing.FavoritesEmpty]: ['page--favorites-empty'],
  [Routing.Login]: ['page--gray', 'page--login'],
  [Routing.Offer]: [],
  [Routing.NotFound]: ['page--gray']
};

export const SECTOR_MAIN_CLASSES: Record<RoutingType, string[]> = {
  [Routing.Main]: ['page__main--index'],
  [Routing.Favorites]: ['page__main--favorites'],
  [Routing.FavoritesEmpty]: [],
  [Routing.Login]: ['page__main--login'],
  [Routing.Offer]: ['page__main--offer'],
  [Routing.NotFound]: ['page__main--index']
};

export const EMPTY_OFFERS_CLASS = 'page__main--index-empty';
export const EMPTY_FAVORITES_CLASS = 'page__main--favorites-empty';

export const RATINGS = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
] as const;

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;

export const LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const ATTRIBUTION_COPY = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const APIRoute = {
  Offers: '/offers',
  Favorite: '/favorite',
  Comments: '/comments',
  Login: '/login',
  Logout: '/logout'
} as const;

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };

export const MAX_NUMBER_REVIEWS = 10;

export const NEAR_PLACES_NUMBER = 3;
