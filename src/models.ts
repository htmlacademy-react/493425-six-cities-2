export const Place = {
  Private: 'Private room',
  Apartment: 'Apartment'
} as const;

export type PlaceType = (typeof Place)[keyof typeof Place];

export type Card = {
  id: number;
  isPremium: boolean;
  imgSrc: string;
  price: number;
  inBookmarks: boolean;
  rating: number;
  name: string;
  type: PlaceType;
};
