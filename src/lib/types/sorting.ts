export const Sorting = {
  Popular: 'Popular',
  PriceLow: 'Price: low to high',
  PriceHigh: 'Price: high to low',
  Top: 'Top rated first'
} as const;

export type SortingType = (typeof Sorting)[keyof typeof Sorting];
