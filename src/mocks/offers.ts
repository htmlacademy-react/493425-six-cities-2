import { OfferCardType } from '../lib/types/offer-card';
import { Place } from '../lib/types/place';

export const OFFERS: OfferCardType[] = [
  {
    id: 0,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: false,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    type: Place.Apartment,
    city: {
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    }
  },
  {
    id: 1,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type: Place.Private,
    city: {
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 1
    }
  },
  {
    id: 2,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: Place.Apartment,
    city: {
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1
    }
  },
  {
    id: 3,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: false,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: Place.Apartment,
    city: {
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 1
    }
  },
  {
    id: 4,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type: Place.Private,
    city: {
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3909554943508,
      longitude: 4.939309666406198,
      zoom: 1
    }
  }
];
