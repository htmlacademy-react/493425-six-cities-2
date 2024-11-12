import { TOfferCard } from '../lib/types/offer-card';
import { Place } from '../lib/types/place';

export const OFFERS: TOfferCard[] = [
  {
    id: 0,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: false,
    rating: 80,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: Place.Apartment,
    city: {
      name: 'Paris'
    }
  },
  {
    id: 1,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 80,
    title: 'Wood and stone place',
    type: Place.Private,
    city: {
      name: 'Paris'
    }
  },
  {
    id: 2,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    rating: 80,
    title: 'Canal View Prinsengracht',
    type: Place.Apartment,
    city: {
      name: 'Paris'
    }
  },
  {
    id: 3,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: false,
    rating: 100,
    title: 'Nice, cozy, warm big bed apartment',
    type: Place.Apartment,
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 4,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 80,
    title: 'Wood and stone place',
    type: Place.Private,
    city: {
      name: 'Brussels'
    }
  }
];
