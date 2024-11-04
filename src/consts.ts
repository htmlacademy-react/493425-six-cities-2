import { RoutingType, Card, Place, Routing } from "./lib/types/types";

export const CARDS: Card[] = [
  {
    id: 0,
    isPremium: true,
    imgSrc: 'img/apartment-01.jpg',
    price: 120,
    inBookmarks: false,
    rating: 80,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: Place.Apartment
  },
  {
    id: 1,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    price: 80,
    inBookmarks: true,
    rating: 80,
    name: 'Wood and stone place',
    type: Place.Private
  },
  {
    id: 2,
    isPremium: false,
    imgSrc: 'img/apartment-02.jpg',
    price: 132,
    inBookmarks: false,
    rating: 80,
    name: 'Canal View Prinsengracht',
    type: Place.Apartment
  },
  {
    id: 3,
    isPremium: true,
    imgSrc: 'img/apartment-03.jpg',
    price: 180,
    inBookmarks: false,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: Place.Apartment
  },
  {
    id: 4,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    price: 80,
    inBookmarks: true,
    rating: 80,
    name: 'Wood and stone place',
    type: Place.Private
  }
];

export const LAYOUT_CLASSES: { [key in RoutingType]: string } = {
  [Routing.Main]: 'page--gray page--main',
  [Routing.Favorites]: '',
  [Routing.Login]: 'page--gray page--login',
  [Routing.Offer]: '',
  [Routing.NotFound]: 'page--gray'
};

export const SECTOR_MAIN_CLASSES: { [key in RoutingType]: string } = {
  [Routing.Main]: 'page__main--index',
  [Routing.Favorites]: 'page__main--favorites',
  [Routing.Login]: 'page__main--login',
  [Routing.Offer]: 'page__main--offer',
  [Routing.NotFound]: 'page__main--index'
};
