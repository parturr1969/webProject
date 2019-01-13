import { MyFeatureStoreState } from './my-feature-store';
import {MyFeatureStandartStoreState} from './my-standart-feature-store';


export interface State {
  myFeature: MyFeatureStoreState.State;
  myStandartFeature: MyFeatureStandartStoreState.State;
}
