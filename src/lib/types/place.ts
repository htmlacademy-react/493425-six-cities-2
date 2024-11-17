export const Place = {
  Private: 'Private room',
  Apartment: 'Apartment'
} as const;

export type PlaceType = (typeof Place)[keyof typeof Place];
