import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Card, Place } from './components/place-card/place-card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cards: Card[] = [
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

root.render(
  <React.StrictMode>
    <App cards={cards}></App>
  </React.StrictMode>
);
