import { Card, Place } from "../lib/types/types";

export const CARDS: Card[] = [
  {
    id: 0,
    isPremium: true,
    imgSrc: 'img/apartment-01.jpg',
    price: 120,
    inBookmarks: false,
    rating: 80,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: Place.Apartment,
    city: 'Paris'
  },
  {
    id: 1,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    price: 80,
    inBookmarks: true,
    rating: 80,
    name: 'Wood and stone place',
    type: Place.Private,
    city: 'Paris'
  },
  {
    id: 2,
    isPremium: false,
    imgSrc: 'img/apartment-02.jpg',
    price: 132,
    inBookmarks: false,
    rating: 80,
    name: 'Canal View Prinsengracht',
    type: Place.Apartment,
    city: 'Paris'
  },
  {
    id: 3,
    isPremium: true,
    imgSrc: 'img/apartment-03.jpg',
    price: 180,
    inBookmarks: false,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: Place.Apartment,
    city: 'Amsterdam'
  },
  {
    id: 4,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    price: 80,
    inBookmarks: true,
    rating: 80,
    name: 'Wood and stone place',
    type: Place.Private,
    city: 'Brussels'
  }
];
