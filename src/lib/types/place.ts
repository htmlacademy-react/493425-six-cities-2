export const Place = {
  Private: 'Private room',
  Apartment: 'Apartment'
} as const;

export type TPlace = (typeof Place)[keyof typeof Place];
