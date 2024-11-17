import { OfferHostType } from './offer-host';

export type ReviewType = {
  id: string;
  date: string;
  user: OfferHostType;
  comment: string;
  rating: number;
}
