import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import { State } from './state';
import {User} from '../../models/user';

const getError = (state: State): any => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getUser = (state: State): any => state.user;

export const selectMyFeatureState: MemoizedSelector<object, State> = createFeatureSelector<State>('myFeature');
export const selectMyFeatureError: MemoizedSelector<object, any> = createSelector(selectMyFeatureState, getError);
export const selectMyFeatureIsLoading: MemoizedSelector<object, boolean> = createSelector(selectMyFeatureState, getIsLoading);
export const selectMyFeatureUser: MemoizedSelector<object, User> = createSelector(selectMyFeatureState, getUser);
