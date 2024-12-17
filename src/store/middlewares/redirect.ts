import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import browserHistory from '../../browser-history';
import { NameSpace } from '../../lib/types/state';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === `${NameSpace.Navigation}/redirectToRoute`) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
