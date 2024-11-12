import { TCity } from './city';
import { TOfferHost } from './offer-host';
import { TOfferLocation } from './offer-location';
import { TPlace } from './place';

export type TOfferCard = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  title: string;
  type: TPlace;
  city: TCity;
  location?: TOfferLocation;
};

export type TOfferDetail = TOfferCard & {
  description: string;
  bedrooms: number;
  goods: string[];
  images: string[];
  maxAdults: number;
  host: TOfferHost;
};
