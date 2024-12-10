import { store } from '../../store';

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const NameSpace = {
  Offers: 'OFFERS',
  Offer: 'OFFER',
  User: 'USER'
} as const;
