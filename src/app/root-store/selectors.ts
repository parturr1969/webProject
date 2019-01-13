import {createSelector, MemoizedSelector} from '@ngrx/store';
import { MyFeatureStoreSelectors} from './my-feature-store';
import { MyFeatureStandartStoreSelectors} from './my-standart-feature-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureError,
  MyFeatureStandartStoreSelectors.selectMyFeatureError,
  (myFeatureError: string, myOtherFeatureError: string) => {
    return myFeatureError || myOtherFeatureError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureIsLoading,
  MyFeatureStandartStoreSelectors.selectMyFeatureIsLoading,
  (myFeature: boolean, myOtherFeature: boolean) => {
    return myFeature || myOtherFeature;
  }
);
