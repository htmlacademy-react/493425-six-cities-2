import { CityType } from './city';
import { OfferHostType } from './offer-host';
import { OfferLocationType } from './offer-location';
import { PlaceType } from './place';

export type PlaceOfferType = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  title: string;
  type: PlaceType;
  city: CityType;
  location: OfferLocationType;
};

export type OfferDetailType = PlaceOfferType & {
  description: string;
  bedrooms: number;
  goods: string[];
  images: string[];
  maxAdults: number;
  host: OfferHostType;
};
